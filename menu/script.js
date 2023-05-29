var app = new Vue({
  el: '#app',
  data: {
    menuItems_L: [
      {
        name: 'Jamon serrano con melon',
        description: 'Seranoham met meloen',
        price: ''
      },
      {
        name: 'Queso manchego',
        description: 'Spaanse schapenkaas',
        price: ''
      },
      {
        name: 'Eggs for Dayz',
        description: 'Denver Omelet (eggs, ham, onion, peppers, cheese)',
        price: '9.50'
      },
      {
        name: 'Slapjack Special',
        description: 'Tasty slapjacks for all',
        price: '2.25'
      },
      {
        name: 'Sunny Side is the Best Side',
        description: 'Sunrise Special, two eggs over easy, one large bacon strip, two pieces of honey dew melon',
        price: '4.50'
      },
      {
        name: 'Compost or Recycle?',
        description: 'Garbage Plate, four eggs, 1/4 lb bacon, 1/4 lb sausage, 1/4 lb cheese, onion',
        price: '10.50'
      },
      {
        name: 'Wake and Bake',
        description: 'All-day breakfast',
        price: '9.99'
      },
      {
        name: 'From Dusk till Dawn',
        description: 'All-night breakfast',
        price: '19.99'
      },
      {
        name: 'Explore the Red Sea',
        description: 'Lamb',
        price: '20.00'
      },
      {
        name: 'Grilled Cheese',
        description: 'Ooey Gooey Goodness',
        price: '4.95'
      },
      {
        name: "Dave's Special Sauce",
        description: 'Extra saucy',
        price: '5.23'
      }
    ],
    menuItems_R: [














        ],
    menuStyle: {
      background: '#ffe6d1',
      color: '#000'
    },
    dotStyle: {
      backgroundImage: 'radial-gradient(' + this.color + ' 1px, transparent 0px)'
    }
  },
  computed: {},
  methods: {
    isEven: function (n) {
      return n % 2 == 0
    }
  }
});
