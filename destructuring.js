// Opdracht 1: destructure price en refreshRate, en log ze in de console

const product = {
	price: 379,
	refreshRate: 50,
	screenType: 'LED',
};

const { price, refreshRate } = product;
console.log('Opdracht 1.', 'Price:', price, 'Refresh rate:', refreshRate);

// Opdracht 2: destructure type en brand en log ze in de console

const productInformation = {
	general: {
		type: '43PUS6504/12',
		name: '4K TV',
		brand: 'Philips',
	},
	screenQuality: 'Ultra HD/4K',
	smartTv: true,
};

const { type, brand } = productInformation.general;
console.log('Opdracht 2.', 'Type:', type, 'Brand:', brand);

// Opdracht 3: destructure wifi en bluetooth en log ze in de console

const tvOptions = {
	options: {
		colors: ['black', 'silver', 'gold', 'sand'],
		connectivity: {
			popular: {
				wifi: true,
				bluetooth: false,
			},
			infrared: false,
		},
	},
};

const { wifi, bluetooth } = tvOptions.options.connectivity.popular;
console.log('Opdracht 3.', 'Wifi:', wifi, 'Bluetooth:', bluetooth);

// Opdracht 4: destructure beide waardes uit deze array en log ze in de console

const connectivity = ['wifi', 'bluetooth'];

const [waifai, blauwetand] = connectivity;
console.log('Opdracht 4.', 'Wifi:', waifai, 'Bluetooth:', blauwetand);

// Opdracht 5: destructure de eerste en derde waarde uit deze array en log ze in de console

const tvSizes = [41, 43, 46, 56, 65];

const [first, , third, ...rest] = tvSizes;
console.log('Opdracht 5.', 'First:', first, 'Third:', third);

// opdracht 6: destructure name en adress uit de return value van deze functie en log ze in de console

function getCompanyDetails() {
	return {
		name: 'Novi Hogeschool',
		address: 'Zonnebaan 9, Utrecht',
	};
}

const { name, address } = getCompanyDetails();
console.log('Opdracht 6.', 'Name:', name, 'Address:', address);

// opdracht 7: destructure beide zinnetjes uit de return value van deze functie en log ze in de console. Let op: de functie verwacht argumenten bij het aanroepen!

function getDetails(name, age) {
	return [`Your name is ${name}`, `You are ${age} years old`];
}

const [phrase1, phrase2] = getDetails('Martijn', 28);
console.log('Opdracht 7.', 'Phrase 1:', phrase1, 'Phrase 2:', phrase2);
