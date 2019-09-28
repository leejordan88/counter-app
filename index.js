const counterApp = {
  count: 0,
  increment: function() {
    this.count = this.count + 1;
  },
  decrement: function() {
    this.count = this.count - 1;
  },
  getCount: function() {
    return this.count;
  },
};

const decrement = document.querySelector('.decrement-btn');
const increment = document.querySelector('.increment-btn');
const counter = document.querySelector('.counter-number');

decrement.addEventListener('click', function() {
  counterApp.decrement();
  counter.innerHTML = counterApp.getCount();
});

increment.addEventListener('click', function() {
  counterApp.increment();
  counter.innerHTML = counterApp.getCount();
});
