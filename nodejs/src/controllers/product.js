import Product from '../models/product'
import slugify from 'slugify'

export const create = async (req, res) => {
    try {
        req.body.slug = slugify(req.body.name)
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            msg: "Error"
        })
    }
}


export const list = async (req, res) => {
    const { limit, search, sortByPrice, sortByName, cateId, time } = req.query
    if (limit) {
        try {
            const products = await Product.find().limit(limit).exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    } else if(limit && time){
        try {
            const products = await Product.find().limit(limit).sort({createdAt: time}).exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    } else if(cateId) {
        try {
            const products = await Product.find({ category: cateId }).exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    } else if(sortByPrice){
        try {
            const products = await Product.find().sort({ price: sortByPrice}).populate('category').exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    } else if(sortByName){
        try {
            const products = await Product.find().sort({ name: sortByName}).populate('category').exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    }
    else if(search){
        try {
            const products = await Product.find({ "$text": {"$search": search}}).populate('category').exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    } else {
        try {
            const products = await Product.find().populate('category').exec();
            res.json(products)
        } catch (error) {
            res.status(400).json({
                message: "Error"
            })
        }
    }
}

export const read = async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ slug: req.params.slug}).exec()
        console.log(req.params.slug)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const update = async (req, res) => {
    // console.log('m', req.params.slug)
    try {
        req.body.slug = slugify(req.body.name)
        const check = { slug: req.params.slug }
        const product = await Product.findOneAndUpdate(check, req.body, { new: true }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}