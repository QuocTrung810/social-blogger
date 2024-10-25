const postModel = require('../models/postModel');
const ApiResponse = require('../utils/apiResponse');
const StatusCode = require('../utils/statusCode');

const getAllPosts = async (req, res) => {
	try {
		const posts = await postModel.find().lean();
		return res
			.status(StatusCode.successResponses.OK)
			.json(ApiResponse.success('Data fetched successfully', posts));
	} catch (err) {
		return res
			.status(StatusCode.serverErrors.INTERNAL_SERVER_ERROR)
			.json(ApiResponse.error('Something went wrong'));
	}
};

module.exports = { getAllPosts };
