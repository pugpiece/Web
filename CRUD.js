class StorageService
{
    constructor()
    {
        this.map = new Map();
        this.id  = '0';
    }
    add(object)
    {
        if (typeof (object) === 'object'){
            this.id = String(Number(this.id) + 1);
            this.map.set(this.id, object);
            return this.id;
        }
        else
        {
            console.log("Данные введены неверно, повторите попытку");
            return null;
        }
    }
    getById(id)
    {
        if (typeof id === 'string')
        {
            if (collection.has(id))
            {
                return collection.get(id);
            }
            else 
            {
                return null;
            }
        }
        else 
        {
            console.log("ID должен быть строкой");
            return null;
        }

    }
    getAll()
    {
        return this.map;
    }
    deleteById(id)
    {
        if (typeof id === 'string')
        {
            if (collection.has(id))
            {
                let result = collection.get(id);
                collection.delete(id);
                return result;
            }
            else 
            {
                return null;
            }
        }
        else 
        {
            console.log("ID должен быть строкой");
            return null;
        }
    }
    updateById(id, object)
    {
        if (typeof id === 'string')
        {
            if (typeof object === 'object')
            {
                for (let key in object) 
                {
                    collection.get(id)[key] = object[key];
                }
                return collection.get(id);
            }
            else 
            {
                console.log("object - должен являться объектом, но был передан как параметр другого типа!");
                return null;
            }
        }
        else 
        {
            console.log("ID - строковый параметр, но был передан как параметр другого типа!");
            return null;
        }
    }
    replaceById(id, object)
    {
        if (typeof id === 'string')
        {
            if (typeof object === 'object')
            {
                return collection.set(id, object);
            }
            else 
            {
                console.log("переданный параметр должен был быть типом object");
                return null;
            }
        }
        else 
        {
            console.log("ID должен быть строкой");
            return null;
        }
    }
}

const storage = new StorageService();

let ID_1 = storage.add
(
    {
    some: 1
    }
);
let ID_2 = storage.add
(
    {
    name: 'Ivan',
    sname: 'Ivanov'
    }
);

let collection = storage.getAll();
console.log(collection);

console.log(storage.getById(1));
console.log(storage.getById(ID_1));
console.log(storage.deleteById(ID_1));
console.log
(
	storage.updateById
	(
		ID_2, 
		{
  	  name: 'Ivan',
  	  sname: 'Petrov'
		}
	)
);
console.log
(
    storage.replaceById
    (
        ID_2, 
        {
        name: 'Petr',
        sname: 'Petrov',
        contributor: 'Bruskov Oleg'
        }
    )
);