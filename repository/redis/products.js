
function findMany() {
  return new Promise((resolve, reject) => {
    redisClient.get('products', (err, products) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(products));
      }
    });
  });
}

function findOne(id) {
    return new Promise((resolve, reject) => {
        redisClient.get('products', (err, products) => {
            if (err) {
                reject(err);
            } else {
                const foundProduct = JSON.parse(products).find(product => product.id === id)
                if(!foundProduct) {
                    reject({ error: {message: 'Product not found'}})
                }
                resolve(foundProduct)
            }
        });
    });
}


export default {
    findMany,
    findOne
}