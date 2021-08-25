import { Request, Response, NextFunction} from 'express';
import { validationResult } from 'express-validator';
import Feed from '../model/feed';


const createPost = async (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(422).json({message: 'Validation failed, entered data is incorrect'});
    } 
    const title = req.body.title;
    const feed = req.body.feed;
    const post = new Feed ({
        title: title,
        feed: feed
    });
    try {
        await post.save();
        res.status(201).json({ message: 'Created Successfully', post: post});
    } catch (err) {
        return res.status(500).json({ message: err.message, err});

    }

};

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await Feed.find();
        res.status(200).json({ message: 'Fetched posts successfully', posts: posts});
    } catch (err) {
        return res.status(500).json({ message: err.message, err});
    }

};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    const feedId = req.params.feedId;
    try {
        const feed = await Feed.findById(feedId);
        if(!feed) {
            return res.status(404).json({ message: 'Post can not be found!'});
        }
        res.status(200).json({ message: 'Post fetched.', post: feed});
    } catch (err) {
        return res.status(500).json({ message: err.message, err});
    }

};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const feedId = req.params.feedId;
    try {
        const post = await Feed.findById(feedId);
        if(!post) {
            return res.status(404).json({ message: 'Post can not be found!'});
        }
        await Feed.findByIdAndRemove(feedId);
        res.status(200).json({ message: 'Deleted post.' });
    } catch (err) {
        return res.status(500).json({ message: err.message, err});
    }

};



export default { createPost, deletePost, getPosts, getPost};