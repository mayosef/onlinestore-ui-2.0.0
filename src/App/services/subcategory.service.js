import Network from './network.service';

class SubcategoryService extends Network {
    
    createSubcategory(subcategory) {
        const data = new FormData();
        for(let prop in subcategory) {
            data.append(prop, subcategory[prop])
        }
        return this.sendMultipart('PUT', '/subcategory',data, {
            'Content-Type': 'muiltipart/form-data'
        })
    }
    removeSubcategory(_id) {
        return this.send('DELETE', `/subcategory/${_id}`)
    }
    getByCategoryId(categoryId) {
        return this.send('GET', `/category/${categoryId}/subcategory`)
    }
    getBySubCategoryId(categoryId, subcategoryId) {
        return this.send('GET', `/category/${categoryId}/subcategory/${subcategoryId}/`)
    }
    editSubcategory(id, subcategory) {
        this.send('POST', `/subcategory/${id}`, subcategory)
    }

    getById(subcategoryId) {
        return this.send('GET', `/subcategory/${subcategoryId}`)
    }
    getAll() {
        return this.send('GET', '/subcategory');
    }

}


export default new SubcategoryService();