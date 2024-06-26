const IncomeSchema = require('../models/income_model');

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ error: 'Amount must be a positive number' });
        }
        // For some reason, the input is not being saved
        await income.save();
        res.status(200).json({ message: 'Income added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        console.log(error)
    }
    console.log(income);
};

exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((Income) => {
            res.status(200).json({ message: 'Income deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server Error' });
        });
};
