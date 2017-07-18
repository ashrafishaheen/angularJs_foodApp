var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})


foodieApp.controller('loginController',function($scope){

})
foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		name: 'Mad Blend',
		address: 'SCF 7-8, 1st Floor, Block F, BRS Nagar, Ludhiana',
		location: 'BRS Nagar',
		category: 'LOUNGE',
		vote: '3.9',
		cuisines: 'Continental, Mexican, Chinese, Italian',
		cost: '2200',
		hours: '11:30 AM to 12 Midnight (Mon, Tue, Thu, Fri, Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/6/15896/46e04d0575f2897ba375cfebf6ab223f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},
	{
		name: 'Bistro 266',
		address: '226, Civil Street, Ghumar Mandi Chowk, Civil Lines, Ludhiana',
		location: 'Civil Lines',
		category: 'CASUAL DINING,CAFE',
		vote: '4.2',
		cuisines: 'Italian, Continental, North Indian, Cafe',
		cost: '1,400',
		hours: '11:30 AM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/15292/1a2058dd9b55f47344bfa9f17727ebb8_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},

	  {
		name: 'Barbeque Nation',
		address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Casual Dining',
		vote: '4.1',
		cuisines: 'North Indian, Chinese',
		cost: '1,600',
		hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/1212/3a128bead1bf42c1d5254078c39d75a2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},


	{
		name: 'IHOP',
		address: 'Ground Floor, Cyber Hub, DLF Cyber City, Gurgaon',
		location: 'Cyber Hub,DLF Cyber City',
		category: 'CAFE',
		vote: '3.9',
		cuisines: 'Cafe, American',
		cost: '1,200',
		hours: '8 AM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/1/18415341/a0cef1e4ccb641304753f2ce4f0fc98e_featured_v2.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},

	{
		name: 'Karims ',
		address: '16, Gali Kababian, Jama Masjid, New Delhi',
		location: 'Jamma Masjid',
		category: 'Casual Dining',
		vote: '3.9',
		cuisines: 'Mughlai,North Indian',
		cost: '800',
		hours: '11 AM to 4 PM, 8 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/1/461/d0dfc30ed835602c35d703fa3bb1159b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},

	{
		name: 'Hauz Khas Social',
		address: '9-A & 12, Hauz Khas Village, New Delhi',
		location: 'Hauz Khas Village',
		category: 'LOUNGE,CASUAL DINING',
		vote: '4.3',
		cuisines: 'Continental, American, Asian, North Indian',
		cost: '1,600',
		hours: '11 AM to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/308322/bd3d04b1fea905b38819e0fd6e8dbfb4_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},


	{
		name: 'On the Waterfront - The Lodhi',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'The Lodhi,Lodhi Road',
		category: 'FINE DINING',
		vote: '4.1',
		cuisines: 'European, Italian, Chinese, Thai, Sushi',
		cost: '3,100',
		hours: '12:30 PM to 3:50 PM, 7 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/8222/0cd71e9a87fb95f2ee05b0facee5c61a_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
	},


	]
})