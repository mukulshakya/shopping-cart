const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.courseSchema = {
  title: Joi.string().min(10).required(),
  description: Joi.string().min(20).required(),
  previewVideoUrl: Joi.string().min(10),
  previewImageUrl: Joi.string().min(10),
  courseImageUrl: Joi.string().min(10),
  category: Joi.objectId().required(),
  price: Joi.number().greater(0).required(),
  discountPercentage: Joi.number(),
};

exports.courseContentSchema = {
  title: Joi.string().min(5).required(),
  description: Joi.string().min(20),
  courseId: Joi.objectId().required(),
};

exports.courseContentVideoSchema = {
  courseContentId: Joi.objectId().required(),
  title: Joi.string().min(5).required(),
  description: Joi.string().min(20),
  duration: Joi.number().greater(0).required(),
  videoUrl: Joi.string().min(10).required(),
  previewVideoUrl: Joi.string().min(10),
  videoThumbnailUrl: Joi.string().min(10),
  isFree: Joi.boolean(),
};

exports.reviewSchema = {
  courseId: Joi.objectId().required(),
  title: Joi.string().min(5).required(),
  body: Joi.string().min(10).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
};

exports.courseQueryParamsSchema = {
  category: Joi.objectId(),
  search: Joi.string().min(1),
  sortBy: Joi.string().valid("views", "rating", "duration", "price", "date"),
  offset: Joi.number().integer(),
  limit: Joi.number().integer(),
};

exports.categorySchema = {
  name: Joi.string().min(5).required(),
  icon: Joi.string().min(10),
};

exports.subscribeCoursesSchema = {
  courseId: Joi.objectId().required(),
  purchasedPrice: Joi.number().required(),
};

exports.courseContentProgressSchema = {
  courseContentVideoId: Joi.objectId().required(),
  durationWatched: Joi.number().required(),
};

exports.validateObjectId = {
  id: Joi.objectId().required(),
};

exports.reviewsQueryParamsSchema = {
  courseId: Joi.objectId().required(),
  offset: Joi.number().integer(),
  limit: Joi.number().integer(),
};

exports.wishlistCourseSchema = {
  courseId: Joi.objectId().required(),
};

exports.blogSchema = {
  title: Joi.string().min(10).required(),
  content: Joi.string().min(20).required(),
  category: Joi.objectId().required(),
};

exports.blogUpdateSchema = {
  id: Joi.objectId().required(),
  title: Joi.string().min(10),
  content: Joi.string().min(20),
  category: Joi.objectId(),
};

exports.blogQueryParamSchema = {
  category: Joi.objectId(),
  author: Joi.objectId(),
  sortBy: Joi.string().valid("views", "date"),
  offset: Joi.number().integer(),
  limit: Joi.number().integer(),
};
