import express from 'express';
import FeedController from '../controller/feed';
const router = express.Router();


/**
 * @swagger
 * 
 * /api/feeds:
 *   get:
 *      tags:
 *      - Feed
 *      summary: Gets all posts from the database.
 *      description: This endpoints gets all the posts that are stored into the database.
 *      requestBody: 
 *          
 *      responses:
 *          200:
 *              description: Success
 *              content: 
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties: 
 *                      message:
 *                        type: string
 *                        example: Fetched successfully!
 *                      posts:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 611e53d57f6b5d04504aa696
 *                              title: 
 *                                  type: string
 *                                  example: My first Feed.
 *                              feed: 
 *                                  type: string
 *                                  example: Hello, This is my first feed.
 *                              createdAt: 
 *                                  type: string
 *                                  example: 2021-08-24T18:20:13.685Z
 *                              updatedAt: 
 *                                  type: string
 *                                  example: 2021-08-24T18:20:13.685Z
 *                                                  
 * 
 */
router.get("/feeds", FeedController.getPosts);


/**
 * @swagger
 * 
 * /api/feed/{feedId}:
 *   get:
 *      tags:
 *      - Feed
 *      summary: Gets a single post from the database.
 *      description: This endpoints gets a particular feed that is stored in the database through the feedId.
 *      parameters: 
 *      -   name: feedId
 *          in: path
 *          description: ID of feed to return
 *          required: true
 *          type: varchar
 *          format: var255
 *          
 *          
 *      responses:
 *          200:
 *              description: Success
 *              content: 
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties: 
 *                      message:
 *                        type: string
 *                        example: Post Fetched!
 *                      post:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  example: 611e53d57f6b5d04504aa696
 *                              title: 
 *                                  type: string
 *                                  example: My first Feed.
 *                              feed: 
 *                                  type: string
 *                                  example: Hello, This is my first feed.
 *                              createdAt: 
 *                                  type: string
 *                                  example: 2021-08-24T18:20:13.685Z
 *                              updatedAt: 
 *                                  type: string
 *                                  example: 2021-08-24T18:20:13.685Z
 * 
 */
router.get("/feed/:feedId", FeedController.getPost);


/**
 * @swagger
 * 
 * /api/feed:
 *   post:
 *      tags:
 *      - Feed
 *      summary: Creates a feed post.
 *      description: This endpoint creates a feed post and saves it to the database.
 *      requestBody: 
 *        required: true
 *        content: 
 *          application/json:
 *            schema: 
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  example: My first Post
 *                feed:
 *                  type: string
 *                  example: Hello, this is a message from that shows my first post.
 *             
 *      
 *      responses:
 *          200:
 *              description: Success
 *              content: 
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties: 
 *                      message:
 *                        type: string
 *                        default: Created successfully!
 *                      data:
 *                          type: object
 *                          properties:
 *                              post:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 60e7209c7372714f1c876317
 *                                      title: 
 *                                          type: string
 *                                          example: My Blog
 *                                      feed: 
 *                                          type: string
 *                                          example: This application was created by Franklyn Nusi.
 *                                      createdAt: 
 *                                          type: string
 *                                          example: 2021-08-24T19:56:23.330Z
 *                                      updatedAt: 
 *                                          type: string
 *                                          example: 2021-08-24T19:56:23.330Z
 *                        
 *     
                      
 */

router.post("/feed", FeedController.createPost);


/**
 * @swagger
 * 
 * /api/deletefeed/{feedId}:
 *   delete:
 *      tags:
 *      - Feed
 *      summary: Delete a particular feed.
 *      description: This endpoint deletes a particular feed from the database.
 *      parameters: 
 *      -   name: feedId
 *          in: path
 *          description: ID of feed to delete.
 *          required: true
 *          type: varchar
 *          format: var255
 *          
 *      responses:
 *          200:
 *              description: Success
 *              content: 
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties: 
 *                      message:
 *                        type: string
 *                        example: Deleted post!
 *                      
 */
router.delete("/deletefeed/:feedId", FeedController.deletePost);



export = router;