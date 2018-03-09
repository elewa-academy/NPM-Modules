## Synchronous Assignment:

* __MODEL__: _Object_
  * PROPERTIES: _4_
    1. DB: _object_
      * Initialized: _{}_
    2. name: _string_
    3. nextID: _number_
      * Initialized: _00_
    4. schema: _nested schema object_
  * METHODS: _8_
    1. create: 
      * ARGS: _new object matching the schema_
      * RETURNS: _success message or helpful error_
      * BEHAVIOR: _validates the object, gives it an ID, adds it to the DB_
    2. read_one:
      * ARGS: _DB object ID_
      * RETURNS: _the object specified by the ID, or an error message_
      * BEHAVIOR: _retrieves the object or sends an error_
    3. read_all:
      * ARGS: _none_
      * RETURNS: _an array containing all elements in the DB object_
      * BEHAVIOR: _reads the DB into an array and returns it_
    4. update:
      * ARGS: _ID, {keyName, newKeyValue}_
      * RETURNS: _success message or helpful error_
      * BEHAVIOR: _checks to see if the id exists, the key exists, and the value is the right type. then it either updates the object or sends an error_
    5. remove:
      * ARGS: _ID_
      * RETURNS: _success message or helpful error_
      * BEHAVIOR: _tries to delete the object, if it doesn't exist an error is thrown_
    6. validate:
      * ARGS: _potential new object_
      * RETURNS: _object and what defaults were replaced, OR, helpful error message_
      * BEHAVIOR: _checks to see if the new object matches the schema. it either replaces with defaults or doesn't (up to you), then returns the fixed object or error message_
    7. find_by:
      * ARGS: _{keyName, keyValue, boolean}_
      * RETURNS: _object from DB or error_
      * BEHAVIOR: _searches the db for the first object with that key-value pair, or sends an error that it doesn't exist_
    8. __optional__: _advanced search methods_

  * __Constructor/Factory__: _Function_
    * ARGS: _2_
      * name: _string_
      * schema: _nested schema object_
    * RETURNS: _fresh synchronous model object_
    * BEHAVIOR: _builds a fresh model object setting name & schema from args, and initializing nextID = 00 & DB = {}_

