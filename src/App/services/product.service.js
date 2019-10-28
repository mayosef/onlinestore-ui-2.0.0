import Network from './network.service';

class ProductService extends Network {
    createProduct(product) {
        const data = new FormData();
        for(let prop in product) {
            data.append(prop, product[prop])
        }
        return this.sendMultipart('PUT', '/product', data, {
            'Content-Type': 'muiltipart/form-data'
        })
    }
        getBySubCategoryId(categoryId, subcategoryId) {
            return this.send('GET', `/category/${categoryId}/subcategory/${subcategoryId}/`)
        }
        editProduct(id, product) {
            return this.send('POST', `/product/${id}`, product)
        }
        removeProduct(_id) {
            return this.send('DELETE', `/product/${_id}`)
        }
        getById(productId) {
            console.log(productId)
            return this.send('GET', `/product/${productId}`)
        }
        getAll() {
            return this.send('GET', '/product');
        }

        getByIds(productIds) {
            return this.send('POST', `/product/bulk`, {
                ids:productIds
            })

        }
}


export default new ProductService();