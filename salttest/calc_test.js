Feature('Salt Calculator');

Scenario('Calculate salt for 100 liters of water with 35 PPT of Pond Salt (NaCl)', ({ I }) => {
  I.amOnPage('/');
  I.see('Salt Calculator');
  I.fillField('Volume (liters)', '100');
  I.fillField('Desired Salinity (PPT)', '35');
  I.selectOption('select', 'Pond Salt (NaCl)');
  I.click('Calculate');
  I.see('Recommend using 3.50 grams of Pond Salt (NaCl)');
});

Scenario('Calculate salt for 100 liters of water with 35 PPT of Epsom Salt (MgSO4)', ({ I }) => {
  I.amOnPage('/');
  I.fillField('Volume (liters)', '100');
  I.fillField('Desired Salinity (PPT)', '35');
  I.selectOption('select', 'Epsom Salt (MgSO4)');
  I.click('Calculate');
  I.see('Recommend using 4.48 grams of Epsom Salt (MgSO4)');
});

Scenario('Calculate salt for 100 liters of water with 35 PPT of Calcium Chloride (CaCl2)', ({ I }) => {
  I.amOnPage('/');
  I.fillField('Volume (liters)', '100');
  I.fillField('Desired Salinity (PPT)', '35');
  I.selectOption('select', 'Calcium Chloride (CaCl2)');
  I.click('Calculate');
  I.see('Recommend using 3.01 grams of Calcium Chloride (CaCl2)');
});

Scenario('Calculate salt for 100 liters of water with 35 PPT of Rock Salt', ({ I }) => {
  I.amOnPage('/');
  I.fillField('Volume (liters)', '100');
  I.fillField('Desired Salinity (PPT)', '35');
  I.selectOption('select', 'Rock Salt');
  I.click('Calculate');
  I.see('Recommend using 3.50 grams of Rock Salt (ensure purity)');
});

Scenario('Invalid input handling', ({ I }) => {
  I.amOnPage('/');
  
  I.fillField('Volume (liters)', 'abc');
  I.fillField('Desired Salinity (PPT)', '35');
  I.selectOption('select', 'Pond Salt (NaCl)');
  I.click('Calculate');
  I.see('Please enter valid numbers for volume and salinity.');
});

Scenario('Negative input handling', ({ I }) => {
  I.amOnPage('/');
  
  I.fillField('Volume (liters)', '1000');
  I.fillField('Desired Salinity (PPT)', '-35');
  I.selectOption('select', 'Pond Salt (NaCl)');
  I.click('Calculate');
  I.see('Please enter valid numbers for volume and salinity.');
});
