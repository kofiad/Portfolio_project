const IncomeSchema = require('../models/income_model');

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body;
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({error: "All fields are required"})
        }
        if (!amount === 'number' || amount <= 0){
            return res.status(400).json({error: "Amount is required"})
        }
        else {
            await income.save();
            res.status(200).json({message: "Income added successfully"})
        }
    } catch(error){

    }

    console.log(income)
};
