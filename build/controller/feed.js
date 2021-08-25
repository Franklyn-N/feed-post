"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const feed_1 = __importDefault(require("../model/feed"));
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const error = express_validator_1.validationResult(req);
    if (!error.isEmpty()) {
        res.status(422).json({ message: 'Validation failed, entered data is incorrect' });
    }
    const title = req.body.title;
    const feed = req.body.feed;
    const post = new feed_1.default({
        title: title,
        feed: feed
    });
    try {
        yield post.save();
        res.status(201).json({ message: 'Created Successfully', post: post });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, err });
    }
});
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield feed_1.default.find();
        res.status(200).json({ message: 'Fetched posts successfully', posts: posts });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, err });
    }
});
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const feedId = req.params.feedId;
    try {
        const feed = yield feed_1.default.findById(feedId);
        if (!feed) {
            return res.status(404).json({ message: 'Post can not be found!' });
        }
        res.status(200).json({ message: 'Post fetched.', post: feed });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, err });
    }
});
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const feedId = req.params.feedId;
    try {
        const post = yield feed_1.default.findById(feedId);
        if (!post) {
            return res.status(404).json({ message: 'Post can not be found!' });
        }
        yield feed_1.default.findByIdAndRemove(feedId);
        res.status(200).json({ message: 'Deleted post.' });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, err });
    }
});
exports.default = { createPost, deletePost, getPosts, getPost };
