const ExpenseSchema = require('../models/expense_model');

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const expense = ExpenseSchema({
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
        await expense.save();
        res.status(200).json({ message: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        console.log(error)
    }
    console.log(expense);
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((Expense) => {
            res.status(200).json({ message: 'Expense deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server Error' });
        });
};
