JStore
======

What is JStore?
---------------

JStore is a lightweight JavaScript Library aimed to make the use of local and session Storage easier. It helps you set, get and remove one or several items at a time. Moreover JStore abstracts the Storage to make you feel that you work with regular JavaScript Object, not only stringified boring key/values combinaisons.

Functions
---------

### Storage.get

Gets one or several items from Storage.

    Storage.get(key);

* key: Array/String - The key of the element. An array can be passed to get several keys. The keys can be stringified object structures (i.e. "foo.bar.key")

### Storage.set

Sets one or several items to Storage.

    Storage.set(key, [value]);

* key: Object/String - The key of the element. An object can be passed to set several keys. The keys can be stringified object structures (i.e. "foo.bar.key"). Object must be formated as following: {foo: 'bar'}
* value: [*] optional - The value to set if a single key is passed.

### Storage.remove

Removes one or several items from Storage.

    Storage.remove(key);

* key: Array/String - The key of the element. An array can be passed to remove several keys. The keys can be stringified object structures (i.e. "foo.bar.key").

### Storage.isset

Checks if a Storage variable is set.

    Storage.isset(key);

* key String - The key of the item to test.

### Storage.c

Clears the Storage (Wrapper for Storage.clear())

    Storage.c();

Usage
-----

* You can set an item to localStorage using:

    localStorage.set("foo", "bar"); 

* We can also set an item to the sessionStorage using:

    sessionStorage.set("fooSession", "barSession"); 

* You prefer things shorter? Me too! At any time you can also use the variables "ls" and "ss" as wrappers.

* We sometimes want to get rid of things, try to remove an item using:

    ls.remove("short")

* And we could also need to check is something is there, yes with: 

    ls.isset("foo")

* Party is better when there is more folks! Look you can set several items at a time! Simply use:

    ls.set({ foo1: "bar1", foo2: "bar2" });

* And also get and remove serveral items at a time! Let's use:

    ls.get(["foo", "foo2"]);

* Cool story man, but now what? Well JStore is aimed to abstract Storage to work with it as if it were a JavaScript Object, that means we can set get and remove values from stringified objects stored in both local and session Storage. Check that with: 

    ls.set("object", {foo:"bar"})

* Now let's say I need to get only a property of the object, we can now use:

    ls.get("object.foo")

* And if I want to modify only a property of my object, can I? Yes, use set like this:

    ls.set("object.lorem", "ipsum")

* Removes works also in here! Test that:

    ls.remove("object.foo")

* Remember you can always mix things together, like setting several object properties at a time. Using for instance:

    ls.set({ "object.hello": "world", "object.max": 42 })

* Wait! We need to erase our foolishness before leaving! Let's use:

    ls.c(); ss.c();
