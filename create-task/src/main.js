import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
const phones = [
  {
    id: 1,
    name: "CMF Phone 2 Pro",
    brand: "CMF",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 349,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 2,
    name: "Fairphone 6",
    brand: "Fairphone",
    chipset: "Snapdragon 7 Gen 1",
    chipsetRating: 44,
    price: 649,
    storage: "256GB",
    ram: "8GB",
    camera: "50MP",
    display: '6.46"',
    battery: "4200mAh",
    releaseYear: 2025,
  },
  {
    id: 3,
    name: "Huawei Pura 80",
    brand: "Huawei",
    chipset: "Kirin 9010",
    chipsetRating: 52,
    price: 899,
    storage: "512GB",
    ram: "12GB",
    camera: "40MP",
    display: '6.7"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 4,
    name: "Huawei Pura X",
    brand: "Huawei",
    chipset: "Kirin 9010",
    chipsetRating: 52,
    price: 1099,
    storage: "512GB",
    ram: "16GB",
    camera: "40MP",
    display: '6.8"',
    battery: "5200mAh",
    releaseYear: 2025,
  },
  {
    id: 5,
    name: "iPhone 16e",
    brand: "Apple",
    chipset: "A17",
    chipsetRating: 94,
    price: 599,
    storage: "128GB",
    ram: "6GB",
    camera: "12MP",
    display: '5.8"',
    battery: "3000mAh",
    releaseYear: 2025,
  },
  {
    id: 6,
    name: "iPhone 17",
    brand: "Apple",
    chipset: "A19",
    chipsetRating: 98,
    price: 799,
    storage: "128GB",
    ram: "8GB",
    camera: "48MP",
    display: '6.1"',
    battery: "3600mAh",
    releaseYear: 2025,
  },
  {
    id: 7,
    name: "iPhone 17 Pro",
    brand: "Apple",
    chipset: "A19 Pro",
    chipsetRating: 98,
    price: 999,
    storage: "256GB",
    ram: "8GB",
    camera: "48MP",
    display: '6.27"',
    battery: "3800mAh",
    releaseYear: 2025,
  },
  {
    id: 8,
    name: "iPhone Air",
    brand: "Apple",
    chipset: "A18",
    chipsetRating: 96,
    price: 699,
    storage: "128GB",
    ram: "8GB",
    camera: "12MP",
    display: '6.6"',
    battery: "3500mAh",
    releaseYear: 2025,
  },
  {
    id: 9,
    name: "iQOO Z10",
    brand: "iQOO",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 349,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.72"',
    battery: "6000mAh",
    releaseYear: 2025,
  },
  {
    id: 10,
    name: "Motorola Edge 60 Pro",
    brand: "Motorola",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 599,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 11,
    name: "Motorola Edge 60",
    brand: "Motorola",
    chipset: "Snapdragon 7 Gen 4",
    chipsetRating: 58,
    price: 549,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 12,
    name: "Nothing Phone 3a Pro",
    brand: "Nothing",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 449,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.7"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 13,
    name: "Nothing Phone 3a",
    brand: "Nothing",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 399,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.7"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 14,
    name: "OPPO Find X8",
    brand: "OPPO",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 799,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.8"',
    battery: "6000mAh",
    releaseYear: 2025,
  },
  {
    id: 15,
    name: "Pixel 9a",
    brand: "Google",
    chipset: "Google Tensor G4",
    chipsetRating: 72,
    price: 499,
    storage: "128GB",
    ram: "8GB",
    camera: "64MP",
    display: '6.3"',
    battery: "4500mAh",
    releaseYear: 2025,
  },
  {
    id: 16,
    name: "Pixel 10",
    brand: "Google",
    chipset: "Google Tensor G4",
    chipsetRating: 72,
    price: 799,
    storage: "128GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.1"',
    battery: "4500mAh",
    releaseYear: 2025,
  },
  {
    id: 17,
    name: "Pixel 10 Pro",
    brand: "Google",
    chipset: "Google Tensor G4",
    chipsetRating: 72,
    price: 999,
    storage: "256GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.7"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 18,
    name: "Pixel 10 Pro Fold",
    brand: "Google",
    chipset: "Google Tensor G4",
    chipsetRating: 72,
    price: 1799,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '7.6"',
    battery: "4400mAh",
    releaseYear: 2025,
  },
  {
    id: 19,
    name: "Pixel 10 Pro XL",
    brand: "Google",
    chipset: "Google Tensor G4",
    chipsetRating: 72,
    price: 1099,
    storage: "256GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.9"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 20,
    name: "Poco M7",
    brand: "Poco",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 249,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 21,
    name: "Poco M7 Plus",
    brand: "Poco",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 299,
    storage: "256GB",
    ram: "8GB",
    camera: "50MP",
    display: '6.72"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 22,
    name: "Redmi 15",
    brand: "Xiaomi",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 249,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 23,
    name: "Redmi 15 5G",
    brand: "Xiaomi",
    chipset: "Snapdragon 7 Gen 4",
    chipsetRating: 58,
    price: 299,
    storage: "128GB",
    ram: "8GB",
    camera: "50MP",
    display: '6.72"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 24,
    name: "Samsung Galaxy A07",
    brand: "Samsung",
    chipset: "MediaTek Helio G85",
    chipsetRating: 25,
    price: 149,
    storage: "64GB",
    ram: "4GB",
    camera: "50MP",
    display: '6.5"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 25,
    name: "Samsung Galaxy A17",
    brand: "Samsung",
    chipset: "MediaTek Helio G99",
    chipsetRating: 33,
    price: 199,
    storage: "128GB",
    ram: "4GB",
    camera: "50MP",
    display: '6.5"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 26,
    name: "Samsung Galaxy A17 5G",
    brand: "Samsung",
    chipset: "Snapdragon 6 Gen 1",
    chipsetRating: 40,
    price: 249,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.6"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 27,
    name: "Samsung Galaxy A36 5G",
    brand: "Samsung",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 299,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.6"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 28,
    name: "Samsung Galaxy A56 5G",
    brand: "Samsung",
    chipset: "Snapdragon 7 Gen 3",
    chipsetRating: 50,
    price: 449,
    storage: "128GB",
    ram: "8GB",
    camera: "50MP",
    display: '6.6"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 29,
    name: "Samsung Galaxy M36 5G",
    brand: "Samsung",
    chipset: "Snapdragon 6 Gen 1",
    chipsetRating: 40,
    price: 199,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.6"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 30,
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 899,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.2"',
    battery: "4000mAh",
    releaseYear: 2025,
  },
  {
    id: 31,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 1299,
    storage: "512GB",
    ram: "16GB",
    camera: "200MP",
    display: '6.9"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 32,
    name: "Samsung Galaxy S25+",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 999,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.7"',
    battery: "4900mAh",
    releaseYear: 2025,
  },
  {
    id: 33,
    name: "Samsung Galaxy Z Flip 7",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 999,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.7"',
    battery: "4000mAh",
    releaseYear: 2025,
  },
  {
    id: 34,
    name: "Samsung Galaxy Z Flip 7 FE",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 3",
    chipsetRating: 92,
    price: 799,
    storage: "128GB",
    ram: "8GB",
    camera: "50MP",
    display: '6.6"',
    battery: "3900mAh",
    releaseYear: 2025,
  },
  {
    id: 35,
    name: "Samsung Galaxy Z Fold 7",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 1899,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '7.6"',
    battery: "4400mAh",
    releaseYear: 2025,
  },
  {
    id: 36,
    name: "Samsung Galaxy Z TriFold",
    brand: "Samsung",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 2499,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '7.4"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 37,
    name: "Sony Xperia 1 VII",
    brand: "Sony",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 1299,
    storage: "512GB",
    ram: "16GB",
    camera: "48MP",
    display: '6.5"',
    battery: "5200mAh",
    releaseYear: 2025,
  },
  {
    id: 38,
    name: "Tecno Spark 40",
    brand: "Tecno",
    chipset: "MediaTek Helio G88",
    chipsetRating: 25,
    price: 179,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.6"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 39,
    name: "Vivo X200 Ultra",
    brand: "Vivo",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 899,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.82"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 40,
    name: "Vivo X200s",
    brand: "Vivo",
    chipset: "Snapdragon 8 Gen 3",
    chipsetRating: 92,
    price: 699,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.78"',
    battery: "5200mAh",
    releaseYear: 2025,
  },
  {
    id: 41,
    name: "Vivo X300 Pro",
    brand: "Vivo",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 799,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.8"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 42,
    name: "Vivo Y400",
    brand: "Vivo",
    chipset: "Snapdragon 6 Gen 1",
    chipsetRating: 40,
    price: 249,
    storage: "128GB",
    ram: "6GB",
    camera: "50MP",
    display: '6.67"',
    battery: "5000mAh",
    releaseYear: 2025,
  },
  {
    id: 43,
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 899,
    storage: "512GB",
    ram: "16GB",
    camera: "50MP",
    display: '6.82"',
    battery: "5500mAh",
    releaseYear: 2025,
  },
  {
    id: 44,
    name: "Xiaomi 17",
    brand: "Xiaomi",
    chipset: "Snapdragon 8 Gen 4",
    chipsetRating: 98,
    price: 749,
    storage: "256GB",
    ram: "12GB",
    camera: "50MP",
    display: '6.73"',
    battery: "5400mAh",
    releaseYear: 2025,
  },
];

function getPhones(phones, selectId) {
  const select = document.getElementById(selectId)
  select.innerHTML = '';

  const defaultOption = document.createElement("option");
  defaultOption.value = "null";
  defaultOption.textContent = "None Selected";
  select.appendChild(defaultOption);

  for (const phone of phones) {
    const phoneOption = document.createElement("option");
    phoneOption.value = phone.id;
    phoneOption.textContent = phone.name;
    select.appendChild(phoneOption);
  }
}

function getSelectedPhone(selectId) {
  const value = document.getElementById(selectId).value;
  return value === 'null' ? null : phones.find(p => p.id === Number(value));
}

function getComparisonClass(key, value1, value2) {
  const numeric = {
    chipsetRating: 'higher',
    price: 'lower',
    storage: 'higher',
    ram: 'higher',
    camera: 'higher',
    display: 'higher',
    battery: 'higher',
    releaseYear: 'higher',
  };

  const compareValue = (val) => {
    if (key === 'storage' || key === 'ram') {
      return Number(val.replace(/[^0-9]/g, ''));
    }
    if (key === 'camera' || key === 'battery' || key === 'chipsetRating' || key === 'releaseYear') {
      return Number(String(val).replace(/[^0-9]/g, ''));
    }
    if (key === 'display') {
      return Number(String(val).replace(/[^0-9.]/g, ''));
    }
    if (key === 'price') {
      return Number(String(val).replace(/[^0-9.]/g, ''));
    }
    return null;
  };

  const rule = numeric[key];
  if (!rule) return ['', ''];

  const a = compareValue(value1);
  const b = compareValue(value2);
  if (Number.isNaN(a) || Number.isNaN(b)) return ['', ''];
  if (a === b) return ['', ''];

  const isFirstBetter = rule === 'higher' ? a > b : a < b;
  return isFirstBetter ? ['better', 'worse'] : ['worse', 'better'];
}

function renderComparisonTable(phone1, phone2) {
  const comparisonResults = document.getElementById('comparison-results');
  const specs = [
    ['Brand', 'brand'],
    ['Chipset', 'chipset'],
    ['Chipset Rating', 'chipsetRating'],
    ['Price', 'price'],
    ['Storage', 'storage'],
    ['RAM', 'ram'],
    ['Camera', 'camera'],
    ['Display', 'display'],
    ['Battery', 'battery'],
    ['Release Year', 'releaseYear'],
  ];

  const rows = specs.map(([label, key]) => {
    const value1 = phone1[key];
    const value2 = phone2[key];
    const [class1, class2] = getComparisonClass(key, value1, value2);
    return `
      <tr>
        <td>${label}</td>
        <td class="${class1}">${value1}</td>
        <td class="${class2}">${value2}</td>
      </tr>
    `;
  }).join('');

  comparisonResults.innerHTML = `
    <h2>Comparison</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>${phone1.name}</th>
          <th>${phone2.name}</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  getPhones(phones, "phone-select-1");
  getPhones(phones, "phone-select-2");

  document.getElementById(`phone-select-1`).addEventListener('change', (e) => {
    const phoneId = e.target.value;
    const specsDiv = document.getElementById('spec-sheet-1');
    if (phoneId === 'null') {
      specsDiv.innerHTML = '';
      return;
    }
    const phone = phones.find(p => p.id == phoneId);
    if (phone) {
      specsDiv.innerHTML = `
        <h2>Name: ${phone.name}</h2>
        <h3>Brand: ${phone.brand}</h3>
        <h3>Chipset: ${phone.chipset}</h3>
        <h3>Chipset Rating: ${phone.chipsetRating}</h3>
        <h3>Price: $${phone.price}</h3>
        <h3>Storage: ${phone.storage}</h3>
        <h3>RAM: ${phone.ram}</h3>
        <h3>Camera: ${phone.camera}</h3>
        <h3>Display: ${phone.display}</h3>
        <h3>Battery: ${phone.battery}</h3>
        <h3>Release Year: ${phone.releaseYear}</h3>
      `;
    }
  });

  document.getElementById('phone-select-2').addEventListener('change', (e) => {
    const phoneId = e.target.value;
    const specDiv = document.getElementById('spec-sheet-2');
    if (phoneId === 'null') {
      specDiv.innerHTML = '';
      return;
    }
    const phone = phones.find(p => p.id == phoneId);
    if (phone) {
      specDiv.innerHTML = `
        <h2>Name: ${phone.name}</h2>
        <h3>Brand: ${phone.brand}</h3>
        <h3>Chipset: ${phone.chipset}</h3>
        <h3>Chipset Rating: ${phone.chipsetRating}</h3>
        <h3>Price: $${phone.price}</h3>
        <h3>Storage: ${phone.storage}</h3>
        <h3>RAM: ${phone.ram}</h3>
        <h3>Camera: ${phone.camera}</h3>
        <h3>Display: ${phone.display}</h3>
        <h3>Battery: ${phone.battery}</h3>
        <h3>Release Year: ${phone.releaseYear}</h3>
      `;
    }
  });

  document.getElementById('compare').addEventListener('click', () => {
    const phone1 = getSelectedPhone('phone-select-1');
    const phone2 = getSelectedPhone('phone-select-2');
    if (!phone1 || !phone2) {
      alert('Please select two phones to compare.');
      return;
    }

    renderComparisonTable(phone1, phone2);
  });
});
