const mongoose = require('mongoose')//建模工具模块；

const MovieSchema = new mongoose.Schema({//定义字段和类型
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: String,
    meta: {//录入或更新数据的时间记录；
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
}, {
        connection: 'entryData', //模型名称,
    })

MovieSchema.pre('save', function (next) {//每次存数据前调用这个方法；
    if (this.isNew) {//判断数据是否是新加的；
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now()
    }
    next();//必须调用该方法，存储流程才会继续走下去；
})

MovieSchema.statics = {//这些静态方法不会直接与数据库交互，只有直接使用模型编译且实例化后。。。statics是给model添加方法，methods是给实例（instance）添加方法。
    fetch: function (cb) {//fetch取出所有数据
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {//查询单条数据；
        return this
            .findOne({ _id: id })
            .exec(cb)
    }
}

module.exports = MovieSchema