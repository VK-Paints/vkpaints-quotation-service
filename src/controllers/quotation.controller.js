const calculateQuotation = async (req, res) => {
  try {
    const { area, price_per_liter, coverage } = req.body;
    if (!area || !price_per_liter || !coverage) {
      return res.status(400).json({ error: 'Missing parameters: area, price_per_liter, and coverage are required.' });
    }
    const liters_required = Math.ceil(area / coverage);
    const total_cost = liters_required * price_per_liter;
    
    res.json({ liters_required, total_cost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  calculateQuotation
};
