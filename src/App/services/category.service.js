import Network from './network.service';
import { isConditionalExpression } from '@babel/types';
import { Form } from 'formik';

class CategoryService extends Network {
    getAll() {
        return this.send('GET', '/category')
    }
    removeCategory(_id) {
        return this.send('DELETE', `/category/${_id}`)
    }
    editCategoryImage(id, image) {
        return this.sendMultipart('POST', `/category/${id}`, image, {
            'Content-Type': 'muiltipart/form-data'
        })
    }

    editCategory(id, category) {
        return this.send('POST', `/category/${id}` , category)
    }
    getById(categoryId) {
        return this.send('GET', `/category/${categoryId}`)
    }
    createCategory(category) {
        const data = new FormData();
        for(let prop in category) {
            data.append(prop, category[prop])
        }
        return this.sendMultipart('PUT', '/category', data, {
            'Content-Type': 'muiltipart/form-data'
        })
    }
}


export default new CategoryService();