const mongo = require("mongoose");

const Model = mongo.model("playdata");

module.exports = {
    async index(req, res){
        const data = await Model.find();
        return res.json(data);
    },

    async show(req, res){
        const data = await Model.findById(req.params.id);
        return res.json(data);
    },

    async update(req, res){
        const data = await Model.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(data);
    },

    async destroy(req, res){
        await Model.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async store(req, res){
        const data = await Model.create(req.body);
        return res.json(data);
    },

    async count(req, res){
        
        Model.countDocuments(Model.find()).exec((err, count) => {
            if (err) {
                res.send(err);
                return;
            }
        
            return res.json({ count: count });
        });
        
    }
}