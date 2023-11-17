// const order = {
  
// };

const order = {
  'customer':{
    'address':{   
    },
  },
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

if(Object.entries(order.customer.address)){
  console.log('City is required');
}