const imageModel = require('./model');

const createImage = ({ imageUrl, title, description, createdBy }) =>
    new Promise((resolve, reject) => {
        imageModel.create({
            imageUrl,
            title,
            description,
            createdBy
        })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getAllImages = page => new Promise((resolve, reject) => {
    imageModel.find({
        "active": true
    })
        .sort({ createdAt: -1 })
        .skip((page - 1) * 20)
        .select("_id imageUrl title description createdAt createdBy view like")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getImage = id => new Promise((resolve, reject) => {
    imageModel.findOne({
        active: true,
        _id: id
    })
        .select("_id imageUrl title description createdAt createdBy view like comment")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateImage = (id, { imageUrl, title, description }) =>
    new Promise((resolve, reject) => {
        imageModel.update({
            _id: id
        }, {
                imageUrl,
                title,
                description,
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const deleteImage = id => new Promise((resolve, reject) => {
    imageModel.update({
        _id: id
    }, {
            active: false
        })
        .then(data => resolve({ id: data._id }))
        .catch(err => reject(err))
});

const addComment = (imageId, { createdBy, content }) =>
    new Promise((resolve, reject) => {
        imageModel.update(
            {
                _id: imageId
            },
            {
                $push: { 
                    comment: { 
                        createdBy, 
                        content 
                    } 
                }
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

const deleteComment = (imageId, commentId ) =>
    new Promise((resolve, reject) => {
        imageModel.update(
            {
                _id: imageId
            },
            {
                $pull: {
                    comment: {
                        _id: commentId
                    }
                }
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

    // const deleteComment = (imageId, commentId ) =>
    // new Promise((resolve, reject) => {
    //     imageModel.update(
    //         {
    //             _id: imageId
    //         },
    //         {
    //             comment: {
    //                 _id: commentId,
    //                 active: false
                    
    //             }
    //         }
    //     )
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));
    // });

const likeImage = (imageId) => 
    new Promise((resolve, reject) => {
        imageModel.update(
            {
                _id: imageId
            },
            {
                $inc: {
                    like: 1
                }
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err));
    });


const unlikeImage = (imageId) => 
    new Promise((resolve, reject) => {
        imageModel.update(
            {
                _id: imageId
            },
            {
                $inc: {like: -1}
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err));
    });


//HOMEWORK
//TODO like image
//TODO unlike image
//TODO comment
//TODO delete comment

module.exports = {
    createImage,
    getAllImages,
    updateImage,
    deleteImage,
    getImage,
    addComment,
    deleteComment,
    likeImage,
    unlikeImage
}
