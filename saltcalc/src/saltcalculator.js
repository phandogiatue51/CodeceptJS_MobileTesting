import React, { useState } from "react";
import "./saltcalculator.css";

const SaltCalculator = () => {
	const [volumeLiters, setVolumeLiters] = useState("");
	const [salinityPPT, setSalinityPPT] = useState("");
	const [saltType, setSaltType] = useState("Pond Salt (NaCl)");
	const [result, setResult] = useState("");

	const calculateSalt = () => {
		const volume = parseFloat(volumeLiters);
		const salinity = parseFloat(salinityPPT);
		//Check if inputs are valid
		if (isNaN(volume) || isNaN(salinity) || volume <= 0 || salinity < 0) {
			setResult('Please enter valid numbers for volume and salinity.');
			return;
		}

		// Calculate salt amount based on salt type
		let calculatedResult;
		switch (saltType) {
			case 'Pond Salt (NaCl)':
			case 'Rock Salt':
				calculatedResult = volume * salinity / 1000;
				break;
			case 'Epsom Salt (MgSO4)':
				calculatedResult = volume * salinity / 1000 * 1.28;
				break;
			case 'Calcium Chloride (CaCl2)':
				calculatedResult = volume * salinity / 1000 * 0.86;
				break;
			default:
				setResult('Invalid salt type');
				return;
		}

		// Round the result to 2 decimal places
		calculatedResult = calculatedResult.toFixed(2);

		// Display the result
		let message = `Recommend using ${calculatedResult} grams of ${saltType}`;
		if (saltType === 'Rock Salt') {
			message += ' (ensure purity)';
		}
		setResult(message);
	};

	const handleClear = () => {
		setVolumeLiters("");
		setSalinityPPT("");
		setSaltType("Pond Salt (NaCl)");
		setResult("");
	};

	return (
		<div className="salt-calculator">
			<h1 className="title">Salt Calculator</h1>
			<form onSubmit={(e) => { e.preventDefault(); calculateSalt(); }}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Volume (liters)"
						value={volumeLiters}
						onChange={(e) => setVolumeLiters(e.target.value)}
						step="0.1"
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Desired Salinity (PPT)"
						value={salinityPPT}
						onChange={(e) => setSalinityPPT(e.target.value)}
						step="0.1"
						required
					/>
				</div>
				<div className="form-group">
					<select
						value={saltType}
						onChange={(e) => setSaltType(e.target.value)}
					>
						<option value="Pond Salt (NaCl)">Pond Salt (NaCl)</option>
						<option value="Epsom Salt (MgSO4)">Epsom Salt (MgSO4)</option>
						<option value="Calcium Chloride (CaCl2)">Calcium Chloride (CaCl2)</option>
						<option value="Rock Salt">Rock Salt</option>
					</select>
				</div>
				<div className="button-group">
					<button type="submit">Calculate</button>
				</div>
			</form>
			{result && <div className="message">{result}</div>}
		</div>
	);
};

export default SaltCalculator;