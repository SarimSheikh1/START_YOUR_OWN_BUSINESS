require('./init');
const db = require('./db');
const bcrypt = require('bcrypt');
const templates = [
['Home-Based Digital Marketing Agency','Services','Lean agency for local businesses and online clients.',200000,450000,1200000,70000,0,40000,0,70000,70000,80000,50000,70000,80000,140000,280000,4,'Moderate','High',1,0,'Beginner'],
['Mobile Accessories Kiosk','Retail','Small retail counter with high-turnover accessories.',250000,500000,1200000,80000,230000,65000,40000,25000,30000,15000,60000,50000,80000,150000,260000,7,'Moderate','Medium',1,1,'Beginner'],
['Graphic Design Studio','Services','Design, print-ready artwork and brand services.',300000,650000,1500000,180000,20000,50000,20000,50000,80000,30000,70000,80000,120000,200000,400000,5,'Moderate','High',1,0,'Beginner'],
['Clothing E-commerce Store','E-commerce','Online apparel store with social-commerce launch.',350000,800000,2000000,70000,330000,30000,0,30000,60000,70000,80000,100000,130000,220000,480000,6,'Higher Risk','High',1,0,'Some Experience'],
['Printing & Branding Shop','Services','Digital printing, branding and signage services.',500000,1100000,2500000,350000,120000,150000,100000,60000,70000,30000,100000,120000,170000,300000,600000,8,'Moderate','Medium',1,1,'Some Experience'],
['Mini Grocery Store','Retail','Neighbourhood essentials store.',700000,1500000,3500000,100000,750000,180000,120000,100000,40000,20000,130000,160000,220000,500000,950000,10,'Moderate','Medium',0,1,'Some Experience'],
['Car Wash Service','Services','Compact vehicle cleaning operation.',850000,1800000,3500000,600000,60000,170000,120000,120000,90000,20000,140000,180000,230000,450000,850000,11,'Moderate','Medium',0,1,'Some Experience'],
['Bakery & Desserts','Food','Small production and retail bakery.',1200000,2500000,5000000,700000,350000,300000,200000,180000,100000,30000,200000,240000,400000,800000,1500000,14,'Higher Risk','Medium',1,1,'Experienced'],
['Cafe','Food','Sit-in and takeaway café model.',1600000,3200000,6000000,800000,250000,550000,350000,300000,150000,50000,300000,350000,420000,900000,1800000,16,'Higher Risk','Medium',1,1,'Experienced'],
['Travel & Tour Agency','Travel','Ticketing, tour planning and travel documentation.',1000000,2200000,5000000,200000,100000,250000,200000,150000,120000,80000,220000,250000,300000,700000,1400000,12,'Moderate','High',1,1,'Experienced'],
['Software Development Agency','Technology','Small product and client-services software firm.',1400000,3000000,7000000,500000,0,250000,200000,350000,200000,180000,300000,350000,450000,1100000,2500000,15,'Moderate','High',1,1,'Professional'],
['Fast Food Restaurant','Food','Quick-service restaurant with dine-in/takeaway.',2200000,4500000,8500000,1100000,650000,750000,500000,550000,250000,80000,400000,500000,600000,1400000,2800000,18,'Higher Risk','High',1,1,'Experienced'],
['Furniture Workshop','Manufacturing','Custom furniture production workshop.',3000000,6000000,10000000,2200000,900000,700000,300000,600000,250000,100000,500000,600000,700000,1800000,4000000,20,'Higher Risk','High',0,1,'Professional'],
['Local Delivery Fleet','Logistics','Last-mile delivery service with small vehicle fleet.',3500000,7000000,10000000,3800000,100000,300000,200000,600000,250000,180000,600000,800000,900000,2500000,5000000,20,'Higher Risk','High',1,1,'Professional'],
['Mini Mart Expansion','Retail','Larger convenience retail with wider inventory.',5000000,9000000,10000000,500000,5000000,1000000,500000,700000,300000,100000,700000,900000,1000000,2800000,5500000,22,'Moderate','High',1,1,'Professional']
];
if (!db.prepare('SELECT id FROM users WHERE email=?').get('admin@businesspro.demo')) db.prepare('INSERT INTO users(name,email,password_hash,role) VALUES(?,?,?,?)').run('Demo Admin','admin@businesspro.demo',bcrypt.hashSync('ChangeMe123!',10),'admin');
if (!db.prepare('SELECT id FROM business_templates LIMIT 1').get()) { const s=db.prepare(`INSERT INTO business_templates(name,category,description,minimum_capital,recommended_capital,maximum_capital,equipment_cost,inventory_cost,setup_cost,rent_deposit,staff_cost,marketing_cost,technology_cost,emergency_reserve,working_capital,estimated_monthly_expenses,estimated_revenue_low,estimated_revenue_high,break_even_months,risk_level,scalability,online_supported,physical_supported,experience_required) VALUES(${Array(24).fill('?').join(',')})`); const tx=db.transaction(rows=>rows.forEach(x=>s.run(...x))); tx(templates); }
console.log('Seed complete. Demo login: admin@businesspro.demo / ChangeMe123!');
