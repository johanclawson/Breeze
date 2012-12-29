﻿// Generated on: Fri Dec 28 2012 18:28:14 GMT-0800 (Pacific Standard Time)

intellisense.annotate(breeze.breeze, {

  'config': function() {
    /// <signature>
    ///   <summary>
    ///   A singleton object that is the repository of all configuration options.
    ///   </summary>
    /// </signature>
  },

  'DataType': function() {
    /// <signature>
    ///   <summary>
    ///   DataType is an 'Enum' containing all of the supported data types.
    ///   </summary>
    /// </signature>
  },

  'EntityState': function() {
    /// <signature>
    ///   <summary>
    ///   EntityState is an 'Enum' containing all of the valid states for an 'Entity'.
    ///   </summary>
    /// </signature>
  },

  'EntityAction': function() {
    /// <signature>
    ///   <summary>
    ///   EntityAction is an 'Enum' containing all of the valid actions that can occur to an 'Entity'.
    ///   </summary>
    /// </signature>
  },

  'EntityAspect': function() {
    /// <signature>
    ///   <summary>
    ///   An EntityAspect instance is associated with every attached entity and is accessed via the entity's 'entityAspect' property. 
    ///   </summary>
    /// </signature>
  },

  'ComplexAspect': function() {
    /// <signature>
    ///   <summary>
    ///   An ComplexAspect instance is associated with every complex object instance and is accessed via the complex object's 'complexAspect' property. 
    ///        
    ///   The ComplexAspect itself provides properties to determine the parent object, parent property and original values for the complex object.
    ///   </summary>
    /// </signature>
  },

  'EntityKey': function() {
    /// <signature>
    ///   <summary>
    ///   An EntityKey is an object that represents the unique identity of an entity.  EntityKey's are immutable.
    ///   </summary>
    ///   <param name="entityType" type="breeze.breeze.EntityType" optional="true">The  'EntityType' of the entity.</param>
    ///   <param name="keyValues" type="Value|Array of values" optional="true">A single value or an array of values.</param>
    /// </signature>
  },

  'EntityManager': function() {
    /// <signature>
    ///   <summary>
    ///   Instances of the EntityManager contain and manage collections of entities, either retrieved from a backend datastore or created on the client.
    ///   </summary>
    ///   <param name="config" type="Object|String" optional="true">Configuration settings or a service name.</param>
    /// </signature>
  },

  'MergeStrategy': function() {
    /// <signature>
    ///   <summary>
    ///   MergeStrategy is an 'Enum' that determines how entities are merged into an EntityManager.
    ///   </summary>
    /// </signature>
  },

  'FetchStrategy': function() {
    /// <signature>
    ///   <summary>
    ///   FetchStrategy is an 'Enum' that determines how and where entities are retrieved from as a result of a query.
    ///   </summary>
    /// </signature>
  },

  'QueryOptions': function() {
    /// <signature>
    ///   <summary>
    ///   A QueryOptions instance is used to specify the 'options' under which a query will occur.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'SaveOptions': function() {
    /// <signature>
    ///   <summary>
    ///   A SaveOptions instance is used to specify the 'options' under which a save will occur.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'ValidationOptions': function() {
    /// <signature>
    ///   <summary>
    ///   A ValidationOptions instance is used to specify the conditions under which validation will be executed.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'LocalQueryComparisonOptions': function() {
    /// <signature>
    ///   <summary>
    ///   A LocalQueryComparisonOptions instance is used to specify the 'comparison rules' used when performing 'local queries' in order 
    ///   to match the semantics of these same queries when executed against a remote service.  These options should be set based on the 
    ///   manner in which your remote service interprets certain comparison operations.
    ///       
    ///   The default LocalQueryComparisonOptions stipulates 'caseInsensitive' queries with ANSI SQL rules regarding comparisons of unequal
    ///   length strings.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'NamingConvention': function() {
    /// <signature>
    ///   <summary>
    ///   A NamingConvention instance is used to specify the naming conventions under which a MetadataStore 
    ///   will translate property names between the server and the javascript client. 
    ///       
    ///   The default NamingConvention does not perform any translation, it simply passes property names thru unchanged.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'MetadataStore': function() {
    /// <signature>
    ///   <summary>
    ///   An instance of the MetadataStore contains all of the metadata about a collection of  'EntityType''s.
    ///   MetadataStores may be shared across  'EntityManager''s.  If an EntityManager is created without an
    ///   explicit MetadataStore, the MetadataStore from the MetadataStore.defaultInstance property will be used.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true">Configuration settings .</param>
    /// </signature>
  },

  'DataService': function() {
    /// <signature>
    ///   <summary>
    ///   A DataService instance is used to encapsulate the details of a single 'service'; this includes a serviceName, a dataService adapterInstance, 
    ///   and whether the service has server side metadata.  
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    /// </signature>
  },

  'EntityType': function() {
    /// <signature>
    ///   <summary>
    ///   Container for all of the metadata about a specific type of Entity.
    ///   </summary>
    ///   <param name="config" type="Object|MetadataStore" optional="true">Configuration settings or a MetadataStore.  If this parameter is just a MetadataStore then what will be created is an 'anonymous' type that will never be communicated to or from the server. It is purely for client side use and will be given an automatically generated name. Normally, however, you will use a configuration object.</param>
    /// </signature>
  },

  'ComplexType': function() {
    /// <signature>
    ///   <summary>
    ///   Container for all of the metadata about a specific type of Complex object.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true">Configuration settings</param>
    /// </signature>
  },

  'DataProperty': function() {
    /// <signature>
    ///   <summary>
    ///   A DataProperty describes the metadata for a single property of an   'EntityType' that contains simple data. 
    ///   </summary>
    ///   <param name="config" type="Configuration Object" optional="true"></param>
    /// </signature>
  },

  'NavigationProperty': function() {
    /// <signature>
    ///   <summary>
    ///   A NavigationProperty describes the metadata for a single property of an   'EntityType' that return instances of other EntityTypes. 
    ///       
    ///   Instances of the NavigationProperty class are constructed automatically during Metadata retrieval.   However it is also possible to construct them
    ///   directly via the constructor.
    ///   </summary>
    ///   <param name="config" type="Configuration Object" optional="true"></param>
    /// </signature>
  },

  'AutoGeneratedKeyType': function() {
    /// <signature>
    ///   <summary>
    ///   AutoGeneratedKeyType is an 'Enum' containing all of the valid states for an automatically generated key.
    ///   </summary>
    /// </signature>
  },

  'EntityQuery': function() {
    /// <signature>
    ///   <summary>
    ///   An EntityQuery instance is used to query entities either from a remote datasource or from a local  'EntityManager'. 
    ///   </summary>
    ///   <param name="resourceName" type="String" optional="true"></param>
    /// </signature>
  },

  'FilterQueryOp': function() {
    /// <signature>
    ///   <summary>
    ///   FilterQueryOp is an 'Enum' containing all of the valid   'Predicate' 
    ///   filter operators for an  'EntityQuery'.
    ///   </summary>
    /// </signature>
  },

  'Predicate': function() {
    /// <signature>
    ///   <summary>
    ///   Used to define a 'where' predicate for an EntityQuery.  Predicates are immutable, which means that any
    ///   method that would modify a Predicate actually returns a new Predicate.
    ///   </summary>
    ///   <param name="property" type="String" optional="true">A property name, a nested property name or an expression involving a property name.</param>
    ///   <param name="operator" type="FilterQueryOp|String" optional="true"></param>
    ///   <param name="value" type="Object" optional="true">- This will be treated as either a property expression or a literal depending on context.  In general,           if the value can be interpreted as a property expression it will be, otherwise it will be treated as a literal.           In most cases this works well, but you can also force the interpretation by setting the next parameter 'valueIsLiteral' to true.</param>
    ///   <param name="valueIsLiteral" type="Boolean" optional="true">- Used to force the 'value' parameter to be treated as a literal - otherwise this will be inferred based on the context.</param>
    /// </signature>
  },

  'Promise': function() {
    /// <signature>
    ///   <summary>
    ///   This is an simply api documentation for the CommonJS A Promises specification as it is used within Breeze.
    ///   </summary>
    /// </signature>
  },

  'Validator': function() {
    /// <signature>
    ///   <summary>
    ///   Instances of the Validator class provide the logic to validate another object and provide a description of any errors
    ///   encountered during the validation process.  They are typically associated with a 'validators' property on the following types:  'EntityType', 
    ///    'DataProperty' or  'NavigationProperty'.
    ///   </summary>
    ///   <param name="name" type="String" optional="true">The name of this validator.</param>
    ///   <param name="validatorFn" type="Function" optional="true">A function to perform validation.      validatorFn(value, context)</param>
    ///   <param name="context" type="Object" optional="true">A free form object whose properties will made available during the validation and error message creation process. This object will be passed into the Validator's validation function whenever 'validate' is called. See above for a description of additional properties that will be automatically added to this object if not otherwise specified.</param>
    /// </signature>
  },

  'ValidationError': function() {
    /// <signature>
    ///   <summary>
    ///   A ValidatationError is used to describe a failed validation.
    ///   </summary>
    ///   <param name="validator" type="breeze.breeze.Validator" optional="true"></param>
    ///   <param name="context" type="Object" optional="true"></param>
    ///   <param name="errorMessage" type="String" optional="true"></param>
    /// </signature>
  },

});

intellisense.annotate(breeze.breeze.config.prototype, {
  
  'setProperties': function() {
    /// <signature>
    ///   <summary>
    ///   This method is now OBSOLETE.  Use the 'initializeAdapterInstances' to accomplish the same result.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    
    /// </signature>
  },
  'registerAdapter': function() {
    /// <signature>
    ///   <summary>
    ///   Method use to register implementations of standard breeze interfaces.  Calls to this method are usually
    ///   made as the last step within an adapter implementation.
    ///   </summary>
    ///   <param name="interfaceName" type="String" optional="true">- one of the following interface names 'ajax', 'dataService' or 'modelLibrary'</param>
    ///   <param name="adapterCtor" type="Function" optional="true">- an ctor function that returns an instance of the specified interface.</param>
    
    /// </signature>
  },
  'getAdapter': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the ctor function used to implement a specific interface with a specific adapter name.
    ///   </summary>
    ///   <param name="interfaceName" type="String" optional="true">One of the following interface names 'ajax', 'dataService' or 'modelLibrary'</param>
    ///   <param name="adapterName" type="String" optional="true">The name of any previously registered adapter. If this parameter is omitted then this method returns the 'default' adapter for this interface. If there is no default adapter, then a null is returned.</param>
    ///   <returns type="Function|null" >Returns either a ctor function or null.</returns>
    /// </signature>
  },
  'initializeAdapterInstances': function() {
    /// <signature>
    ///   <summary>
    ///   Initializes a collection of adapter implementations and makes each one the default for its corresponding interface.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    ///   <returns type="" >[array of instances]</returns>
    /// </signature>
  },
  'initializeAdapterInstance': function() {
    /// <signature>
    ///   <summary>
    ///   Initializes a single adapter implementation. Initialization means either newing a instance of the 
    ///   specified interface and then calling 'initialize' on it or simply calling 'initialize' on the instance
    ///   if it already exists.
    ///   </summary>
    ///   <param name="interfaceName" type="String" optional="true">The name of the interface to which the adapter to initialize belongs.</param>
    ///   <param name="adapterName" type="String" optional="true">- The name of a previously registered adapter to initialize.</param>
    ///   <param name="isDefault" type="Boolean" optional="true">- Whether to make this the default 'adapter' for this interface.</param>
    ///   <returns type="An instance of the specified adapter" ></returns>
    /// </signature>
  },
  'getAdapterInstance': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the adapter instance corresponding to the specified interface and adapter names.
    ///   </summary>
    ///   <param name="interfaceName" type="String" optional="true">The name of the interface.</param>
    ///   <param name="adapterName" type="String" optional="true">- The name of a previously registered adapter.  If this parameter is omitted then the default implementation of the specified interface is returned. If there is no defaultInstance of this interface, then the first registered instance of this interface is returned.</param>
    ///   <returns type="An instance of the specified adapter" ></returns>
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.config, {
  
  
});

intellisense.annotate(breeze.breeze.DataType.prototype, {
  
  
  /// <field name="defaultValue" type="Any" >The default value of this DataType.</field>
  'defaultValue': null,
  
  /// <field name="isNumeric" type="Boolean" >Whether this is a 'numeric' DataType.</field>
  'isNumeric': null,
  
});
intellisense.annotate(breeze.breeze.DataType, {
  
  'fromEdmDataType': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the DataType for a specified EDM type name.
    ///   </summary>
    ///   <param name="typeName" type="String" optional="true"></param>
    ///   <returns type="breeze.breeze.DataType >A DataType.</returns>
    /// </signature>
  },
  
  /// <field name="String" type="breeze.breeze.DataType" ></field>
  'String': null,
  
  /// <field name="Int64" type="breeze.breeze.DataType" ></field>
  'Int64': null,
  
  /// <field name="Int32" type="breeze.breeze.DataType" ></field>
  'Int32': null,
  
  /// <field name="Int16" type="breeze.breeze.DataType" ></field>
  'Int16': null,
  
  /// <field name="Decimal" type="breeze.breeze.DataType" ></field>
  'Decimal': null,
  
  /// <field name="Double" type="breeze.breeze.DataType" ></field>
  'Double': null,
  
  /// <field name="Single" type="breeze.breeze.DataType" ></field>
  'Single': null,
  
  /// <field name="DateTime" type="breeze.breeze.DataType" ></field>
  'DateTime': null,
  
  /// <field name="Boolean" type="breeze.breeze.DataType" ></field>
  'Boolean': null,
  
  /// <field name="Guid" type="breeze.breeze.DataType" ></field>
  'Guid': null,
  
  /// <field name="Byte" type="breeze.breeze.DataType" ></field>
  'Byte': null,
  
  /// <field name="Binary" type="breeze.breeze.DataType" ></field>
  'Binary': null,
  
  /// <field name="Undefined" type="breeze.breeze.DataType" ></field>
  'Undefined': null,
  
});

intellisense.annotate(breeze.breeze.EntityState.prototype, {
  
  'isUnchanged': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Unchanged.</returns>
    /// </signature>
  },
  'isAdded': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Added.</returns>
    /// </signature>
  },
  'isModified': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Modified.</returns>
    /// </signature>
  },
  'isDeleted': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Deleted.</returns>
    /// </signature>
  },
  'isDetached': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Detached.</returns>
    /// </signature>
  },
  'isUnchangedOrModified': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Unchanged or EntityState.Modified.</returns>
    /// </signature>
  },
  'isAddedModifiedOrDeleted': function() {
    /// <signature>
    ///   <summary>
    ///   </summary>
    ///   <returns type="Boolean" >Whether an entityState instance is EntityState.Unchanged or EntityState.Modified or EntityState.Deleted.</returns>
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.EntityState, {
  
  
  /// <field name="Unchanged" type="breeze.breeze.EntityState" >The 'Unchanged' state.</field>
  'Unchanged': null,
  
  /// <field name="Added" type="breeze.breeze.EntityState" >The 'Added' state.</field>
  'Added': null,
  
  /// <field name="Modified" type="breeze.breeze.EntityState" >The 'Modified' state.</field>
  'Modified': null,
  
  /// <field name="Deleted" type="breeze.breeze.EntityState" >The 'Deleted' state.</field>
  'Deleted': null,
  
  /// <field name="Detached" type="breeze.breeze.EntityState" >The 'Detached' state.</field>
  'Detached': null,
  
});

intellisense.annotate(breeze.breeze.EntityAction.prototype, {
  
  
});
intellisense.annotate(breeze.breeze.EntityAction, {
  
  
  /// <field name="Attach" type="breeze.breeze.EntityAction" >Attach - Entity was attached via an AttachEntity call.</field>
  'Attach': null,
  
  /// <field name="AttachOnQuery" type="breeze.breeze.EntityAction" >AttachOnQuery - Entity was attached as a result of a query.</field>
  'AttachOnQuery': null,
  
  /// <field name="AttachOnImport" type="breeze.breeze.EntityAction" >AttachOnImport - Entity was attached as a result of an import.</field>
  'AttachOnImport': null,
  
  /// <field name="Detach" type="breeze.breeze.EntityAction" >AttachOnQuery - Entity was detached.</field>
  'Detach': null,
  
  /// <field name="MergeOnQuery" type="breeze.breeze.EntityAction" >MergeOnQuery - Properties on the entity were merged as a result of a query.</field>
  'MergeOnQuery': null,
  
  /// <field name="MergeOnImport" type="breeze.breeze.EntityAction" >MergeOnImport - Properties on the entity were merged as a result of an import.</field>
  'MergeOnImport': null,
  
  /// <field name="MergeOnImport" type="breeze.breeze.EntityAction" >MergeOnImport - Properties on the entity were merged as a result of a save</field>
  'MergeOnImport': null,
  
  /// <field name="PropertyChange" type="breeze.breeze.EntityAction" >PropertyChange - A property on the entity was changed.</field>
  'PropertyChange': null,
  
  /// <field name="EntityStateChange" type="breeze.breeze.EntityAction" >EntityStateChange - The EntityState of the entity was changed.</field>
  'EntityStateChange': null,
  
  /// <field name="AcceptChanges" type="breeze.breeze.EntityAction" >AcceptChanges - AcceptChanges was called on the entity, or its entityState was set to Unmodified.</field>
  'AcceptChanges': null,
  
  /// <field name="RejectChanges" type="breeze.breeze.EntityAction" >RejectChanges - RejectChanges was called on the entity.</field>
  'RejectChanges': null,
  
  /// <field name="Clear" type="breeze.breeze.EntityAction" >Clear - The EntityManager was cleared.  All entities detached.</field>
  'Clear': null,
  
});

intellisense.annotate(breeze.breeze.EntityAspect.prototype, {
  
  'getKey': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the  'EntityKey' for this Entity.
    ///   </summary>
    ///   <param name="forceRefresh" type="Boolean" optional="true">Forces the recalculation of the key.  This should normally be unnecessary.</param>
    ///   <returns type="breeze.breeze.EntityKey" >The  'EntityKey' associated with this Entity.</returns>
    /// </signature>
  },
  'acceptChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the entity to an  'EntityState' of 'Unchanged' by committing all changes made since the entity was last queried 
    ///   had 'acceptChanges' called on it.
    ///   </summary>
    
    /// </signature>
  },
  'rejectChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the entity to an EntityState of 'Unchanged' by rejecting all changes made to it since the entity was last queried 
    ///   had 'rejectChanges' called on it.
    ///   </summary>
    
    /// </signature>
  },
  'setUnchanged': function() {
    /// <signature>
    ///   <summary>
    ///   Sets the entity to an EntityState of 'Unchanged'.  This is also the equivalent of calling  'EntityAspect/acceptChanges'
    ///   </summary>
    
    /// </signature>
  },
  'setModified': function() {
    /// <signature>
    ///   <summary>
    ///   Sets the entity to an EntityState of 'Modified'.  This can also be achieved by changing the value of any property on an 'Unchanged' entity.
    ///   </summary>
    
    /// </signature>
  },
  'setDeleted': function() {
    /// <signature>
    ///   <summary>
    ///   Sets the entity to an EntityState of 'Deleted'.  This both marks the entity as being scheduled for deletion during the next 'Save' call
    ///   but also removes the entity from all of its related entities.
    ///   </summary>
    
    /// </signature>
  },
  'validateEntity': function() {
    /// <signature>
    ///   <summary>
    ///   Performs validation on the entity, any errors encountered during the validation are available via the 
    ///    'EntityAspect.getValidationErrors' method. Validating an entity means executing
    ///   all of the validators on both the entity itself as well as those on each of its properties.
    ///   </summary>
    ///   <returns type="Boolean" >Whether the entity passed validation.</returns>
    /// </signature>
  },
  'validateProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Performs validation on a specific property of this entity, any errors encountered during the validation are available via the 
    ///    'EntityAspect.getValidationErrors' method. Validating a property means executing
    ///   all of the validators on the specified property.  This call is also made automatically anytime a property
    ///   of an entity is changed.
    ///   </summary>
    ///   <param name="property" type="DataProperty|NavigationProperty|String" optional="true">The  'DataProperty' or   'NavigationProperty' to validate or a string with the name of the property or a property path with the path to a property of a complex object.</param>
    ///   <param name="context" type="Object" optional="true">A context object used to pass additional information to each   'Validator'</param>
    ///   <returns type="Boolean" >Whether the entity passed validation.</returns>
    /// </signature>
  },
  'getValidationErrors': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the validation errors associated with either the entire entity or any specified property.
    ///   </summary>
    ///   <param name="property" type="DataProperty|NavigationProperty" optional="true">The property for which validation errors should be retrieved. If omitted, all of the validation errors for this entity will be returned.</param>
    ///   <returns type="Array" elementType="breeze.breeze.ValidationError" ></returns>
    /// </signature>
  },
  'addValidationError': function() {
    /// <signature>
    ///   <summary>
    ///   Adds a validation error for a specified property.
    ///   </summary>
    ///   <param name="validationError" type="breeze.breeze.ValidationError" optional="true"></param>
    
    /// </signature>
  },
  'removeValidationError': function() {
    /// <signature>
    ///   <summary>
    ///   Removes a validation error for a specified property.
    ///   </summary>
    ///   <param name="validator" type="breeze.breeze.Validator" optional="true"></param>
    ///   <param name="property" type="DataProperty|NavigationProperty" optional="true"></param>
    
    /// </signature>
  },
  'clearValidationErrors': function() {
    /// <signature>
    ///   <summary>
    ///   Removes all of the validation errors for a specified entity
    ///   </summary>
    
    /// </signature>
  },
  'loadNavigationProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Performs a query for the value of a specified  'NavigationProperty'.
    ///   </summary>
    ///   <param name="navigationProperty" type="breeze.breeze.NavigationProperty" optional="true">The NavigationProperty to 'load'.</param>
    ///   <param name="callback" type="Function" optional="true">Function to call on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function to call on failure.</param>
    ///   <returns type="breeze.breeze.Promise" ></returns>
    /// </signature>
  },
  
  /// <field name="entity" type="Entity" >The Entity that this aspect is associated with.</field>
  'entity': null,
  
  /// <field name="entityManager" type="breeze.breeze.EntityManager" >The  'EntityManager' that contains this entity.</field>
  'entityManager': null,
  
  /// <field name="entityState" type="breeze.breeze.EntityState" >The  'EntityState' of this entity.</field>
  'entityState': null,
  
  /// <field name="isBeingSaved" type="Boolean" >Whether this entity is in the process of being saved.</field>
  'isBeingSaved': null,
  
  /// <field name="originalValues" type="Object" >The 'original values' of this entity where they are different from the 'current values'.  This is a map where the key is a property name and the value is the 'original value' of the property.</field>
  'originalValues': null,
  
});
intellisense.annotate(breeze.breeze.EntityAspect, {
  
  
});

intellisense.annotate(breeze.breeze.ComplexAspect.prototype, {
  
  
  /// <field name="complexObject" type="Entity" >The complex object that this aspect is associated with.</field>
  'complexObject': null,
  
  /// <field name="parent" type="Entity|ComplexObject" >The parent object that to which this aspect belongs; this will either be an entity or another complex object.</field>
  'parent': null,
  
  /// <field name="parentProperty" type="breeze.breeze.DataProperty" >The  'DataProperty' on the 'parent' that contains this complex object.</field>
  'parentProperty': null,
  
  /// <field name="entityAspect" type="String" >The EntityAspect for the top level entity tht contains this complex object.</field>
  'entityAspect': null,
  
  /// <field name="propertyPath" type="String" >The 'property path' from the top level entity that contains this complex object to this object.</field>
  'propertyPath': null,
  
  /// <field name="originalValues" type="Object" >The 'original values' of this complex object where they are different from the 'current values'.  This is a map where the key is a property name and the value is the 'original value' of the property.</field>
  'originalValues': null,
  
});
intellisense.annotate(breeze.breeze.ComplexAspect, {
  
  
});

intellisense.annotate(breeze.breeze.EntityKey.prototype, {
  
  'equals': function() {
    /// <signature>
    ///   <summary>
    ///   Used to compare EntityKeys are determine if they refer to the same Entity.
    ///   There is also an static version of 'equals' with the same functionality.
    ///   </summary>
    ///   <param name="entityKey" type="breeze.breeze.EntityKey" optional="true"></param>
    
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.EntityKey, {
  
  'equals': function() {
    /// <signature>
    ///   <summary>
    ///   Used to compare EntityKeys are determine if they refer to the same Entity. 
    ///   There is also an instance version of 'equals' with the same functionality.
    ///   </summary>
    ///   <param name="k1" type="breeze.breeze.EntityKey" optional="true"></param>
    ///   <param name="k2" type="breeze.breeze.EntityKey" optional="true"></param>
    
    /// </signature>
  },
  
});

intellisense.annotate(breeze.breeze.EntityManager.prototype, {
  
  'exportEntities': function() {
    /// <signature>
    ///   <summary>
    ///   Exports an entire EntityManager or just selected entities into a serialized string for external storage.
    ///   </summary>
    ///   <param name="entities" type="Array" elementType="entities" optional="true">The entities to export; all entities are exported if this is omitted.</param>
    ///   <returns type="String" >A serialized version of the exported data.</returns>
    /// </signature>
  },
  'importEntities': function() {
    /// <signature>
    ///   <summary>
    ///   Imports a previously exported result into this EntityManager.
    ///   </summary>
    ///   <param name="exportedString" type="String" optional="true">The result of a previous 'export' call.</param>
    ///   <param name="config" type="Object" optional="true">A configuration object.</param>
    
    /// </signature>
  },
  'clear': function() {
    /// <signature>
    ///   <summary>
    ///   Clears this EntityManager's cache but keeps all other settings. Note that this 
    ///   method is not as fast as creating a new EntityManager via 'new EntityManager'.
    ///   This is because clear actually detaches all of the entities from the EntityManager.
    ///   </summary>
    
    /// </signature>
  },
  'setProperties': function() {
    /// <signature>
    ///   <summary>
    ///   General purpose property set method.  Any of the properties documented below 
    ///   may be set.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true"></param>
    
    /// </signature>
  },
  'createEmptyCopy': function() {
    /// <signature>
    ///   <summary>
    ///   Creates an empty copy of this EntityManager
    ///   </summary>
    ///   <returns type="breeze.breeze.EntityManager" >A new EntityManager.</returns>
    /// </signature>
  },
  'addEntity': function() {
    /// <signature>
    ///   <summary>
    ///   Attaches an entity to this EntityManager with an   'EntityState' of 'Added'.
    ///   </summary>
    ///   <param name="entity" type="Entity" optional="true">The entity to add.</param>
    ///   <returns type="Entity" >The added entity.</returns>
    /// </signature>
  },
  'attachEntity': function() {
    /// <signature>
    ///   <summary>
    ///   Attaches an entity to this EntityManager with a specified  'EntityState'.
    ///   </summary>
    ///   <param name="entity" type="Entity" optional="true">The entity to add.</param>
    ///   <param name="entityState" type="breeze.breeze.EntityState" optional="true">The EntityState of the newly attached entity. If omitted this defaults to EntityState.Unchanged.</param>
    ///   <returns type="Entity" >The attached entity.</returns>
    /// </signature>
  },
  'detachEntity': function() {
    /// <signature>
    ///   <summary>
    ///   Detaches an entity from this EntityManager.
    ///   </summary>
    ///   <param name="entity" type="Entity" optional="true">The entity to detach.</param>
    ///   <returns type="Boolean" >Whether the entity could be detached. This will return false if the entity is already detached or was never attached.</returns>
    /// </signature>
  },
  'fetchMetadata': function() {
    /// <signature>
    ///   <summary>
    ///   Fetches the metadata associated with the EntityManager's current 'serviceName'.  This call
    ///   occurs internally before the first query to any service if the metadata hasn't already been
    ///   loaded.
    ///   </summary>
    ///   <param name="callback" type="Function" optional="true">Function called on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function called on failure.          failureFunction([error])</param>
    ///   <returns type="breeze.breeze.Promise" >Promise </returns>
    /// </signature>
  },
  'executeQuery': function() {
    /// <signature>
    ///   <summary>
    ///   Executes the specified query.
    ///   </summary>
    ///   <param name="query" type="EntityQuery|String" optional="true">The  'EntityQuery' or OData query string to execute.</param>
    ///   <param name="callback" type="Function" optional="true">Function called on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function called on failure.          failureFunction([error])</param>
    ///   <returns type="breeze.breeze.Promise" >Promise</returns>
    /// </signature>
  },
  'executeQueryLocally': function() {
    /// <signature>
    ///   <summary>
    ///   Executes the specified query against this EntityManager's local cache.
    ///   </summary>
    ///   <param name="query" type="breeze.breeze.EntityQuery" optional="true">The  'EntityQuery' to execute.</param>
    ///   <returns type="Array" elementType="Entity" >Array of Entities</returns>
    /// </signature>
  },
  'saveChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Saves either a list of specified entities or all changed entities within this EntityManager. If there are no changes to any of the entities
    ///   specified then there will be no server side call made but a valid 'empty' saveResult will still be returned.
    ///   </summary>
    ///   <param name="entities" type="Array" elementType="Entity" optional="true">The list of entities to save.  All entities with changes  within this EntityManager will be saved if this parameter is omitted, null or empty.</param>
    ///   <param name="saveOptions" type="breeze.breeze.SaveOptions" optional="true"> 'SaveOptions' for the save - will default to  'EntityManager/saveOptions' if null.</param>
    ///   <param name="callback" type="Function" optional="true">Function called on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function called on failure.          failureFunction([error])</param>
    ///   <returns type="breeze.breeze.Promise" >Promise</returns>
    /// </signature>
  },
  'getEntityByKey': function() {
    /// <signature>
    ///   <summary>
    ///   Attempts to locate an entity within this EntityManager by its key.
    ///   </summary>
    ///   <param name="typeName" type="String" optional="true">The entityType name for this key.</param>
    ///   <param name="keyValues" type="Object|Array of Object" optional="true">The values for this key - will usually just be a single value; an array is only needed for multipart keys.</param>
    ///   <returns type="Entity" >An Entity or null;</returns>
    /// </signature>
  },
  'getEntityByKey - overload': function() {
    /// <signature>
    ///   <summary>
    ///   Attempts to locate an entity within this EntityManager by its   'EntityKey'.
    ///   </summary>
    ///   <param name="entityKey" type="breeze.breeze.EntityKey" optional="true">The   'EntityKey' of the Entity to be located.</param>
    ///   <returns type="Entity" >An Entity or null;</returns>
    /// </signature>
  },
  'fetchEntityByKey': function() {
    /// <signature>
    ///   <summary>
    ///   Attempts to fetch an entity from the server by its key with
    ///   an option to check the local cache first. Note the this EntityManager's queryOptions.mergeStrategy 
    ///   will be used to merge any server side entity returned by this method.
    ///   </summary>
    ///   <param name="typeName" type="String" optional="true">The entityType name for this key.</param>
    ///   <param name="keyValues" type="Object|Array of Object" optional="true">The values for this key - will usually just be a single value; an array is only needed for multipart keys.</param>
    ///   <param name="checkLocalCacheFirst" type="Boolean=false" optional="true">Whether to check this EntityManager first before going to the server. By default, the query will NOT do this.</param>
    ///   <returns type="breeze.breeze.Promise" ></returns>
    /// </signature>
  },
  'fetchEntityByKey - overload': function() {
    /// <signature>
    ///   <summary>
    ///   Attempts to fetch an entity from the server by its  'EntityKey' with
    ///   an option to check the local cache first.
    ///   </summary>
    ///   <param name="entityKey" type="breeze.breeze.EntityKey" optional="true">The   'EntityKey' of the Entity to be located.</param>
    ///   <param name="checkLocalCacheFirst" type="Boolean=false" optional="true">Whether to check this EntityManager first before going to the server. By default, the query will NOT do this.</param>
    ///   <returns type="breeze.breeze.Promise" ></returns>
    /// </signature>
  },
  'findEntityByKey': function() {
    /// <signature>
    ///   <summary>
    ///   Attempts to locate an entity within this EntityManager by its   'EntityKey'.
    ///   </summary>
    ///   <param name="entityKey" type="breeze.breeze.EntityKey" optional="true">The   'EntityKey' of the Entity to be located.</param>
    ///   <returns type="Entity" >An Entity or null;</returns>
    /// </signature>
  },
  'generateTempKeyValue': function() {
    /// <signature>
    ///   <summary>
    ///   Generates a temporary key for the specified entity.  This is used to insure that newly
    ///   created entities have unique keys and to register that these keys are temporary and
    ///   need to be automatically replaced with 'real' key values once these entities are saved.
    ///   </summary>
    ///   <param name="entity" type="Entity" optional="true">The Entity to generate a key for.</param>
    ///   <returns type="Object" >The new key value</returns>
    /// </signature>
  },
  'hasChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether there are any changed entities of the specified  'EntityType's. A 'changed' Entity has
    ///   has an  'EntityState' of either Added, Modified or Deleted.
    ///   </summary>
    ///   <param name="entityTypes" type="String|Array of String|EntityType|Array of EntityType" optional="true">The  'EntityType's for which 'changed' entities will be found. If this parameter is omitted, all EntityTypes are searched. String parameters are treated as EntityType names.</param>
    ///   <returns type="Boolean" >Whether there were any changed entities.</returns>
    /// </signature>
  },
  'getChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a array of all changed entities of the specified  'EntityType's. A 'changed' Entity has
    ///   has an  'EntityState' of either Added, Modified or Deleted.
    ///   </summary>
    ///   <param name="entityTypes" type="String|Array of String|EntityType|Array of EntityType" optional="true">The  'EntityType's for which 'changed' entities will be found. If this parameter is omitted, all EntityTypes are searched. String parameters are treated as EntityType names.</param>
    ///   <returns type="Array" elementType="Entity" >Array of Entities</returns>
    /// </signature>
  },
  'rejectChanges': function() {
    /// <signature>
    ///   <summary>
    ///   Rejects (reverses the effects) all of the additions, modifications and deletes from this EntityManager.
    ///   </summary>
    ///   <returns type="Array" elementType="Entity" >The entities whose changes were rejected. These entities will all have EntityStates of  either 'Unchanged' or 'Detached'</returns>
    /// </signature>
  },
  'getEntities': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a array of all entities of the specified  'EntityType's with the specified  'EntityState's.
    ///   </summary>
    ///   <param name="entityTypes" type="String|Array of String|EntityType|Array of EntityType" optional="true">The  'EntityType's for which entities will be found. If this parameter is omitted, all EntityTypes are searched. String parameters are treated as EntityType names.</param>
    ///   <param name="entityState" type="EntityState|Array of EntityState" optional="true">The  'EntityState's for which entities will be found. If this parameter is omitted, entities of all EntityStates are returned.</param>
    ///   <returns type="Array" elementType="Entity" >Array of Entities</returns>
    /// </signature>
  },
  
  /// <field name="serviceName" type="String" >The service name associated with this EntityManager.</field>
  'serviceName': null,
  
  /// <field name="dataService" type="breeze.breeze.DataService" >The DataService name associated with this EntityManager.</field>
  'dataService': null,
  
  /// <field name="metadataStore" type="breeze.breeze.MetadataStore" >The  'MetadataStore' associated with this EntityManager. </field>
  'metadataStore': null,
  
  /// <field name="queryOptions" type="breeze.breeze.QueryOptions" >The  'QueryOptions' associated with this EntityManager.</field>
  'queryOptions': null,
  
  /// <field name="saveOptions" type="breeze.breeze.SaveOptions" >The  'SaveOptions' associated with this EntityManager.</field>
  'saveOptions': null,
  
  /// <field name="validationOptions" type="breeze.breeze.ValidationOptions" >The  'ValidationOptions' associated with this EntityManager.</field>
  'validationOptions': null,
  
  /// <field name="keyGeneratorCtor" type="KeyGenerator constructor" >The  'KeyGenerator' constructor associated with this EntityManager.</field>
  'keyGeneratorCtor': null,
  
  /// <field name="dataServiceAdapterInstance" type="An instance of the &quot;dataService&quot; adapter interface" >The 'dataService' adapter implementation instance associated with this EntityManager.</field>
  'dataServiceAdapterInstance': null,
  
});
intellisense.annotate(breeze.breeze.EntityManager, {
  
  'importEntities': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a new EntityManager and imports a previously exported result into it.
    ///   </summary>
    ///   <param name="exportedString" type="String" optional="true">The result of a previous 'exportEntities' call.</param>
    ///   <param name="config" type="Object" optional="true">A configuration object.</param>
    ///   <returns type="breeze.breeze.EntityManager >A new EntityManager.</returns>
    /// </signature>
  },
  
});

intellisense.annotate(breeze.breeze.MergeStrategy.prototype, {
  
  
});
intellisense.annotate(breeze.breeze.MergeStrategy, {
  
  
  /// <field name="PreserveChanges" type="breeze.breeze.MergeStrategy" >PreserveChanges is used to stop merging from occuring if the existing entity in an entityManager is already in a  'EntityState/Modified' state. In this case, the existing entity in the  EntityManager is not replaced by the 'merging' entity.</field>
  'PreserveChanges': null,
  
  /// <field name="OverwriteChanges" type="breeze.breeze.MergeStrategy" >OverwriteChanges is used to allow merging to occur even if the existing entity in an entityManager is already in a  'EntityState/Modified' state. In this case, the existing entity in the  EntityManager is replaced by the 'merging' entity.</field>
  'OverwriteChanges': null,
  
});

intellisense.annotate(breeze.breeze.FetchStrategy.prototype, {
  
  
});
intellisense.annotate(breeze.breeze.FetchStrategy, {
  
  
  /// <field name="FromServer" type="breeze.breeze.MergeStrategy" >FromServer is used to tell the query to execute the query against a remote data source on the server.</field>
  'FromServer': null,
  
  /// <field name="FromLocalCache" type="breeze.breeze.MergeStrategy" >FromLocalCache is used to tell the query to execute the query against a local EntityManager instead of going to a remote server.</field>
  'FromLocalCache': null,
  
});

intellisense.annotate(breeze.breeze.QueryOptions.prototype, {
  
  'using': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a copy of this QueryOptions with the specified  'MergeStrategy' 
    ///   or  'FetchStrategy' applied.
    ///   </summary>
    ///   <param name="config" type="Configuration Object|MergeStrategy|FetchStrategy" optional="true">The object to apply to create a new QueryOptions.</param>
    ///   <returns type="breeze.breeze.QueryOptions" ></returns>
    /// </signature>
  },
  'setAsDefault': function() {
    /// <signature>
    ///   <summary>
    ///   Makes this instance the default instance.
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="fetchStrategy" type="breeze.breeze.FetchStrategy" >A  'FetchStrategy' __readOnly__</field>
  'fetchStrategy': null,
  
  /// <field name="mergeStrategy" type="breeze.breeze.MergeStrategy" >A  'MergeStrategy' __readOnly__</field>
  'mergeStrategy': null,
  
});
intellisense.annotate(breeze.breeze.QueryOptions, {
  
  
  /// <field name="defaultInstance" type="breeze.breeze.QueryOptions" >The default value whenever QueryOptions are not specified.</field>
  'defaultInstance': null,
  
});

intellisense.annotate(breeze.breeze.SaveOptions.prototype, {
  
  'setAsDefault': function() {
    /// <signature>
    ///   <summary>
    ///   Makes this instance the default instance.
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="allowConcurrentSaves" type="Boolean" >Whether another save can be occuring at the same time as this one - default is false.</field>
  'allowConcurrentSaves': null,
  
});
intellisense.annotate(breeze.breeze.SaveOptions, {
  
  
  /// <field name="defaultInstance" type="breeze.breeze.SaveOptions" >The default value whenever SaveOptions are not specified.</field>
  'defaultInstance': null,
  
});

intellisense.annotate(breeze.breeze.ValidationOptions.prototype, {
  
  'using': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a copy of this ValidationOptions with changes to the specified config properties.
    ///   </summary>
    ///   <param name="config" type="Object" optional="true">The object to apply to create a new QueryOptions.</param>
    ///   <returns type="breeze.breeze.ValidationOptions" ></returns>
    /// </signature>
  },
  'setAsDefault': function() {
    /// <signature>
    ///   <summary>
    ///   Makes this instance the default instance.
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="validateOnAttach" type="Boolean" >Whether entity and property level validation should occur when entities are attached to the EntityManager other than via a query.</field>
  'validateOnAttach': null,
  
  /// <field name="validateOnSave" type="Boolean" >Whether entity and property level validation should occur before entities are saved. A failed validation will force the save to fail early.</field>
  'validateOnSave': null,
  
  /// <field name="validateOnQuery" type="Boolean" >Whether entity and property level validation should occur after entities are queried from a remote server.</field>
  'validateOnQuery': null,
  
  /// <field name="validateOnPropertyChange" type="Boolean" >Whether property level validation should occur after entities are modified.</field>
  'validateOnPropertyChange': null,
  
});
intellisense.annotate(breeze.breeze.ValidationOptions, {
  
  
  /// <field name="defaultInstance" type="breeze.breeze.ValidationOptions" >The default value whenever ValidationOptions are not specified.</field>
  'defaultInstance': null,
  
});

intellisense.annotate(breeze.breeze.LocalQueryComparisonOptions.prototype, {
  
  'setAsDefault': function() {
    /// <signature>
    ///   <summary>
    ///   Makes this instance the default instance.
    ///   </summary>
    
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.LocalQueryComparisonOptions, {
  
  
  /// <field name="caseInsensitiveSQL" type="breeze.breeze.LocalQueryComparisonOptions" >Case insensitive SQL compliant options - this is also the default unless otherwise changed.</field>
  'caseInsensitiveSQL': null,
  
  /// <field name="defaultInstance" type="breeze.breeze.LocalQueryComparisonOptions" >The default value whenever LocalQueryComparisonOptions are not specified. By default this is 'caseInsensitiveSQL'.</field>
  'defaultInstance': null,
  
});

intellisense.annotate(breeze.breeze.NamingConvention.prototype, {
  
  'serverPropertyNameToClient': function() {
    /// <signature>
    ///   <summary>
    ///   The function used to convert server side property names to client side property names.
    ///   </summary>
    ///   <param name="serverPropertyName" type="String" optional="true"></param>
    ///   <param name="property" type="DataProperty|NavigationProperty" optional="true">The actual DataProperty or NavigationProperty corresponding to the property name.</param>
    ///   <returns type="String" >The client side property name.</returns>
    /// </signature>
  },
  'clientPropertyNameToServer': function() {
    /// <signature>
    ///   <summary>
    ///   The function used to convert client side property names to server side property names.
    ///   </summary>
    ///   <param name="clientPropertyName" type="String" optional="true"></param>
    ///   <param name="property" type="DataProperty|NavigationProperty" optional="true">The actual DataProperty or NavigationProperty corresponding to the property name.</param>
    ///   <returns type="String" >The server side property name.</returns>
    /// </signature>
  },
  'setAsDefault': function() {
    /// <signature>
    ///   <summary>
    ///   Makes this instance the default instance.
    ///   </summary>
    
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.NamingConvention, {
  
  
  /// <field name="none" type="breeze.breeze.NamingConvention" >A noop naming convention - This is the default unless another is specified.</field>
  'none': null,
  
  /// <field name="camelCase" type="breeze.breeze.NamingConvention" >The 'camelCase' naming convention - This implementation only lowercases the first character of the server property name but leaves the rest of the property name intact.  If a more complicated version is needed then one should be created via the ctor.</field>
  'camelCase': null,
  
  /// <field name="defaultInstance" type="breeze.breeze.NamingConvention" >The default value whenever NamingConventions are not specified.</field>
  'defaultInstance': null,
  
});

intellisense.annotate(breeze.breeze.MetadataStore.prototype, {
  
  'addDataService': function() {
    /// <signature>
    ///   <summary>
    ///   Adds a DataService to this MetadataStore. If a DataService with the same serviceName is already
    ///   in the MetadataStore an exception will be thrown.
    ///   </summary>
    ///   <param name="dataService" type="breeze.breeze.DataService" optional="true">The DataService to add</param>
    
    /// </signature>
  },
  'addEntityType': function() {
    /// <signature>
    ///   <summary>
    ///   Adds an EntityType to this MetadataStore.  No additional properties may be added to the EntityType after its has
    ///   been added to the MetadataStore.
    ///   </summary>
    ///   <param name="structuralType" type="EntityType|ComplexType" optional="true">The EntityType or ComplexType to add</param>
    
    /// </signature>
  },
  'exportMetadata': function() {
    /// <signature>
    ///   <summary>
    ///   Exports this MetadataStore to a serialized string appropriate for local storage.   This operation is also called 
    ///   internally when exporting an EntityManager.
    ///   </summary>
    ///   <returns type="String" >A serialized version of this MetadataStore that may be stored locally and later restored.</returns>
    /// </signature>
  },
  'importMetadata': function() {
    /// <signature>
    ///   <summary>
    ///   Imports a previously exported serialized MetadataStore into this MetadataStore.
    ///   </summary>
    ///   <param name="exportedString" type="String" optional="true">A previously exported MetadataStore.</param>
    ///   <returns type="breeze.breeze.MetadataStore" >This MetadataStore.</returns>
    /// </signature>
  },
  'hasMetadataFor': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether Metadata has been retrieved for a specified service name.
    ///   </summary>
    ///   <param name="serviceName" type="String" optional="true">The service name.</param>
    ///   <returns type="Boolean" ></returns>
    /// </signature>
  },
  'hasMetadataFor': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the DataService for a specified service name
    ///   </summary>
    ///   <param name="serviceName" type="String" optional="true">The service name.</param>
    ///   <returns type="Boolean" ></returns>
    /// </signature>
  },
  'fetchMetadata': function() {
    /// <signature>
    ///   <summary>
    ///   Fetches the metadata for a specified 'service'. This method is automatically called 
    ///   internally by an EntityManager before its first query against a new service.
    ///   </summary>
    ///   <param name="dataService" type="DataService|String" optional="true">Either a DataService or just the name of the DataService to fetch metadata for.</param>
    ///   <param name="callback" type="Function" optional="true">Function called on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function called on failure.</param>
    ///   <returns type="breeze.breeze.Promise" >Promise</returns>
    /// </signature>
  },
  'trackUnmappedType': function() {
    /// <signature>
    ///   <summary>
    ///   Used to register a constructor for an EntityType that is not known via standard Metadata discovery; 
    ///   i.e. an unmapped type.
    ///   </summary>
    ///   <param name="entityCtor" type="Function" optional="true">The constructor for the 'unmapped' type.</param>
    ///   <param name="interceptor" type="Function" optional="true">A function</param>
    
    /// </signature>
  },
  'registerEntityTypeCtor': function() {
    /// <signature>
    ///   <summary>
    ///   Provides a mechanism to register a 'custom' constructor to be used when creating new instances
    ///   of the specified entity type.  If this call is not made, a default constructor is created for
    ///   the entity as needed.
    ///   This call may be made before or after the corresponding EntityType has been discovered via
    ///   Metadata discovery.
    ///   </summary>
    ///   <param name="structuralTypeName" type="String" optional="true">The name of the EntityType o0r ComplexType.</param>
    ///   <param name="aCtor" type="Function" optional="true">The constructor for this EntityType or ComplexType; may be null if all you want to do is set the next parameter.</param>
    ///   <param name="initializationFn" type="Function" optional="true">A function or the name of a function on the entity that is to be executed immediately after the entity has been created and populated with any initial values.      initializationFn(entity)</param>
    
    /// </signature>
  },
  'isEmpty': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether this MetadataStore contains any metadata yet.
    ///   </summary>
    ///   <returns type="Boolean" ></returns>
    /// </signature>
  },
  'getEntityType': function() {
    /// <signature>
    ///   <summary>
    ///   Returns an   'EntityType' or a  'CompleType' given its name.
    ///   </summary>
    ///   <param name="structuralTypeName" type="String" optional="true">Either the fully qualified name or a short name may be used. If a short name is specified and multiple types share that same short name an exception will be thrown.</param>
    ///   <param name="okIfNotFound" type="Boolean" optional="true">Whether to throw an error if the specified EntityType is not found.</param>
    ///   <returns type="EntityType|ComplexType" >The EntityType. ComplexType or 'undefined' if not not found.</returns>
    /// </signature>
  },
  'getEntityTypes': function() {
    /// <signature>
    ///   <summary>
    ///   Returns an array containing all of the   'EntityType's in this MetadataStore.
    ///   </summary>
    ///   <returns type="Array" elementType="breeze.breeze.EntityType" ></returns>
    /// </signature>
  },
  
  /// <field name="namingConvention" type="breeze.breeze.NamingConvention" >The   'NamingConvention' associated with this MetadataStore.</field>
  'namingConvention': null,
  
});
intellisense.annotate(breeze.breeze.MetadataStore, {
  
  'importMetadata': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a new MetadataStore from a previously exported serialized MetadataStore
    ///   </summary>
    ///   <param name="exportedString" type="String" optional="true">A previously exported MetadataStore.</param>
    ///   <returns type="breeze.breeze.MetadataStore >A new MetadataStore.</returns>
    /// </signature>
  },
  
});

intellisense.annotate(breeze.breeze.DataService.prototype, {
  
  
  /// <field name="serviceName" type="String" >The serviceName for this DataService.</field>
  'serviceName': null,
  
  /// <field name="adapterName" type="String" >The adapter name for the dataServiceAdapter to be used with this service.</field>
  'adapterName': null,
  
  /// <field name="hasServerMetadata" type="Boolean" >Whether the server can provide metadata for this service.</field>
  'hasServerMetadata': null,
  
});
intellisense.annotate(breeze.breeze.DataService, {
  
  
});

intellisense.annotate(breeze.breeze.EntityType.prototype, {
  
  'setProperties': function() {
    /// <signature>
    ///   <summary>
    ///   General purpose property set method
    ///   </summary>
    ///   <param name="config" type="" optional="true">[object]</param>
    
    /// </signature>
  },
  'addProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Adds a   'DataProperty' or a  'NavigationProperty' to this EntityType.
    ///   </summary>
    ///   <param name="property" type="DataProperty|NavigationProperty" optional="true"></param>
    
    /// </signature>
  },
  'createEntity': function() {
    /// <signature>
    ///   <summary>
    ///   Create a new entity of this type.
    ///   </summary>
    ///   <param name="initialValues" type="Config object" optional="true">- Configuration object of the properties to set immediately after creation.</param>
    ///   <returns type="Entity" >The new entity.</returns>
    /// </signature>
  },
  'getEntityCtor': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the constructor for this EntityType.
    ///   </summary>
    ///   <returns type="Function" >The constructor for this EntityType.</returns>
    /// </signature>
  },
  'addValidator': function() {
    /// <signature>
    ///   <summary>
    ///   Adds either an entity or property level validator to this EntityType.
    ///   </summary>
    ///   <param name="validator" type="breeze.breeze.Validator" optional="true">Validator to add.</param>
    ///   <param name="property" type="" optional="true">Property to add this validator to.  If omitted, the validator is assumed to be an entity level validator and is added to the EntityType's 'validators'.</param>
    
    /// </signature>
  },
  'getProperties': function() {
    /// <signature>
    ///   <summary>
    ///   Returns all of the properties ( dataProperties and navigationProperties) for this EntityType.
    ///   </summary>
    ///   <returns type="Array of DataProperty|NavigationProperty" >Array of Data and Navigation properties.</returns>
    /// </signature>
  },
  'getPropertyNames': function() {
    /// <signature>
    ///   <summary>
    ///   Returns all of the property names ( for both dataProperties and navigationProperties) for this EntityType.
    ///   </summary>
    ///   <returns type="Array" elementType="String" ></returns>
    /// </signature>
  },
  'getDataProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a data property with the specified name or null.
    ///   </summary>
    ///   <param name="propertyName" type="String" optional="true"></param>
    ///   <returns type="breeze.breeze.DataProperty" >Will be null if not found.</returns>
    /// </signature>
  },
  'getNavigationProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a navigation property with the specified name or null.
    ///   </summary>
    ///   <param name="propertyName" type="String" optional="true"></param>
    ///   <returns type="breeze.breeze.NavigationProperty" >Will be null if not found.</returns>
    /// </signature>
  },
  'getProperty': function() {
    /// <signature>
    ///   <summary>
    ///   Returns either a DataProperty or a NavigationProperty with the specified name or null.  
    ///   </summary>
    ///   <param name="propertyPath" type="String" optional="true"></param>
    ///   <param name="throwIfNotFound" type="Boolean" optional="true">Whether to throw an exception if not found.</param>
    ///   <returns type="DataProperty|NavigationProperty" >Will be null if not found.</returns>
    /// </signature>
  },
  'toString': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a string representation of this EntityType.
    ///   </summary>
    ///   <returns type="String" ></returns>
    /// </signature>
  },
  
  /// <field name="metadataStore" type="breeze.breeze.MetadataStore" >The  'MetadataStore' that contains this EntityType</field>
  'metadataStore': null,
  
  /// <field name="dataProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties (see  'DataProperty') associated with this EntityType.</field>
  'dataProperties': null,
  
  /// <field name="navigationProperties" type="Array" elementType="breeze.breeze.NavigationProperty" >The NavigationProperties  (see  'NavigationProperty') associated with this EntityType.</field>
  'navigationProperties': null,
  
  /// <field name="complexProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties for this EntityType that contain instances of a ComplexType (see  'ComplexType').</field>
  'complexProperties': null,
  
  /// <field name="keyProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties associated with this EntityType that make up it's  'EntityKey'.</field>
  'keyProperties': null,
  
  /// <field name="foreignKeyProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties associated with this EntityType that are foreign key properties.</field>
  'foreignKeyProperties': null,
  
  /// <field name="concurrencyProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties associated with this EntityType that are concurrency properties.</field>
  'concurrencyProperties': null,
  
  /// <field name="unmappedProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties associated with this EntityType that are not mapped to any backend datastore. These are effectively free standing properties.</field>
  'unmappedProperties': null,
  
  /// <field name="defaultResourceName" type="String" >The default resource name associated with this EntityType.  An EntityType may be queried via a variety of 'resource names' but this one  is used as the default when no resource name is provided.  This will occur when calling  'EntityAspect/loadNavigationProperty' or when executing any  'EntityQuery' that was created via an  'EntityKey'.</field>
  'defaultResourceName': null,
  
  /// <field name="name" type="String" >The fully qualifed name of this EntityType.</field>
  'name': null,
  
  /// <field name="shortName" type="String" >The short, unqualified, name for this EntityType.</field>
  'shortName': null,
  
  /// <field name="namespace" type="String" >The namespace for this EntityType.</field>
  'namespace': null,
  
  /// <field name="autoGeneratedKeyType" type="breeze.breeze.AutoGeneratedKeyType" >The  'AutoGeneratedKeyType' for this EntityType.</field>
  'autoGeneratedKeyType': null,
  
  /// <field name="validators" type="Array" elementType="breeze.breeze.Validator" >The entity level validators associated with this EntityType. Validators can be added and removed from this collection.</field>
  'validators': null,
  
});
intellisense.annotate(breeze.breeze.EntityType, {
  
  
});

intellisense.annotate(breeze.breeze.ComplexType.prototype, {
  
  'createInstance': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a new non-attached instance of this ComplexType.
    ///   </summary>
    ///   <param name="initialValues" type="Object" optional="true">Configuration object containing initial values for the instance.</param>
    
    /// </signature>
  },
  'addValidator': function() {
    /// <signature>
    ///   <summary>
    ///   See   'EntityType.addValidator'
    ///   </summary>
    ///   <param name="validator" type="breeze.breeze.Validator" optional="true">Validator to add.</param>
    ///   <param name="property" type="" optional="true">Property to add this validator to.  If omitted, the validator is assumed to be an entity level validator and is added to the EntityType's 'validators'.</param>
    
    /// </signature>
  },
  'getProperty': function() {
    /// <signature>
    ///   <summary>
    ///   See   'EntityType.getProperty'
    ///   </summary>
    
    /// </signature>
  },
  'getPropertyNames': function() {
    /// <signature>
    ///   <summary>
    ///   See   'EntityType.getPropertyNames'
    ///   </summary>
    
    /// </signature>
  },
  'getCtor': function() {
    /// <signature>
    ///   <summary>
    ///   See   'EntityType.getEntityCtor'
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="dataProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties (see  'DataProperty') associated with this ComplexType.</field>
  'dataProperties': null,
  
  /// <field name="complexProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties for this ComplexType that contain instances of a ComplexType (see  'ComplexType').</field>
  'complexProperties': null,
  
  /// <field name="unmappedProperties" type="Array" elementType="breeze.breeze.DataProperty" >The DataProperties associated with this ComplexType that are not mapped to any backend datastore. These are effectively free standing properties.</field>
  'unmappedProperties': null,
  
  /// <field name="name" type="String" >The fully qualifed name of this ComplexType.</field>
  'name': null,
  
  /// <field name="shortName" type="String" >The short, unqualified, name for this ComplexType.</field>
  'shortName': null,
  
  /// <field name="namespace" type="String" >The namespace for this ComplexType.</field>
  'namespace': null,
  
  /// <field name="validators" type="Array" elementType="breeze.breeze.Validator" >The entity level validators associated with this ComplexType. Validators can be added and removed from this collection.</field>
  'validators': null,
  
});
intellisense.annotate(breeze.breeze.ComplexType, {
  
  
});

intellisense.annotate(breeze.breeze.DataProperty.prototype, {
  
  
  /// <field name="name" type="String" >The name of this property</field>
  'name': null,
  
  /// <field name="parentEntityType" type="breeze.breeze.EntityType" >The  'EntityType' that this property belongs to.</field>
  'parentEntityType': null,
  
  /// <field name="dataType" type="breeze.breeze.DataType" >The  'DataType' of this property.</field>
  'dataType': null,
  
  /// <field name="isNullable" type="Boolean" >Whether this property is nullable. </field>
  'isNullable': null,
  
  /// <field name="isPartOfKey" type="Boolean" >Whether this property is a 'key' property. </field>
  'isPartOfKey': null,
  
  /// <field name="isUnmapped" type="Boolean" >Whether this property is an 'unmapped' property. </field>
  'isUnmapped': null,
  
  /// <field name="concurrencyMode" type="String" >__Describe this__</field>
  'concurrencyMode': null,
  
  /// <field name="maxLength" type="Number" >The maximum length for the value of this property.</field>
  'maxLength': null,
  
  /// <field name="fixedLength" type="Boolean" >Whether this property is of 'fixed' length or not.</field>
  'fixedLength': null,
  
  /// <field name="validators" type="Array" elementType="breeze.breeze.Validator" >The  'Validator's that are associated with this property. Validators can be added and removed from this collection.</field>
  'validators': null,
  
  /// <field name="defaultValue" type="Any" >The default value for this property.</field>
  'defaultValue': null,
  
  /// <field name="relatedNavigationProperty" type="breeze.breeze.NavigationProperty" >The navigation property related to this property.  Will only be set if this is a foreign key property. </field>
  'relatedNavigationProperty': null,
  
});
intellisense.annotate(breeze.breeze.DataProperty, {
  
  
});

intellisense.annotate(breeze.breeze.NavigationProperty.prototype, {
  
  
  /// <field name="parentEntityType" type="breeze.breeze.EntityType" >The  'EntityType' that this property belongs to. __readOnly__</field>
  'parentEntityType': null,
  
  /// <field name="name" type="String" >The name of this property</field>
  'name': null,
  
  /// <field name="entityType" type="breeze.breeze.EntityType" >The  'EntityType' returned by this property.</field>
  'entityType': null,
  
  /// <field name="isScalar" type="Boolean" >Whether this property returns a single entity or an array of entities.</field>
  'isScalar': null,
  
  /// <field name="associationName" type="String" >The name of the association to which that this property belongs.  This associationName will be shared with this  properties 'inverse'.</field>
  'associationName': null,
  
  /// <field name="foreignKeyNames" type="Array" elementType="String" >The names of the foreign key DataProperties associated with this NavigationProperty. There will usually only be a single DataProperty associated  with a Navigation property except in the case of entities with multipart keys.</field>
  'foreignKeyNames': null,
  
  /// <field name="relatedDataProperties" type="Array" elementType="breeze.breeze.DataProperty" >The 'foreign key' DataProperties associated with this NavigationProperty. There will usually only be a single DataProperty associated  with a Navigation property except in the case of entities with multipart keys.</field>
  'relatedDataProperties': null,
  
  /// <field name="inverse" type="breeze.breeze.NavigationProperty" >The inverse of this NavigationProperty.  The NavigationProperty that represents a navigation in the opposite direction to this NavigationProperty.</field>
  'inverse': null,
  
  /// <field name="validators" type="Array" elementType="breeze.breeze.Validator" >The  'Validator's that are associated with this property. Validators can be added and removed from this collection.</field>
  'validators': null,
  
  /// <field name="isDataProperty" type="Boolean" >Is this a DataProperty? - always false here  Allows polymorphic treatment of DataProperties and NavigationProperties.</field>
  'isDataProperty': null,
  
  /// <field name="isNavigationProperty" type="Boolean" >Is this a NavigationProperty? - always true here  Allows polymorphic treatment of DataProperties and NavigationProperties.</field>
  'isNavigationProperty': null,
  
});
intellisense.annotate(breeze.breeze.NavigationProperty, {
  
  
});

intellisense.annotate(breeze.breeze.AutoGeneratedKeyType.prototype, {
  
  
});
intellisense.annotate(breeze.breeze.AutoGeneratedKeyType, {
  
  
  /// <field name="None" type="breeze.breeze.AutoGeneratedKeyType" >This entity does not have an autogenerated key.  The client must set the key before adding the entity to the EntityManager</field>
  'None': null,
  
  /// <field name="Identity" type="breeze.breeze.AutoGeneratedKeyType" >This entity's key is an Identity column and is set by the backend database.  Keys for new entities will be temporary until the entities are saved at which point the keys will be converted to their 'real' versions.</field>
  'Identity': null,
  
  /// <field name="KeyGenerator" type="breeze.breeze.AutoGeneratedKeyType" >This entity's key is generated by a KeyGenerator and is set by the backend database.  Keys for new entities will be temporary until the entities are saved at which point the keys will be converted to their 'real' versions.</field>
  'KeyGenerator': null,
  
});

intellisense.annotate(breeze.breeze.EntityQuery.prototype, {
  
  'from': function() {
    /// <signature>
    ///   <summary>
    ///   Specifies the resource to query for this EntityQuery.
    ///   </summary>
    ///   <param name="resourceName" type="String" optional="true">The resource to query.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'where': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query with an added filter criteria. Can be called multiple times which means to 'and' with any existing Predicate.
    ///   </summary>
    ///   <param name="predicate" type="Predicate|property|property path, operator, value" optional="true">Can be either</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'orderBy': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that orders the results of the query by property name.  By default sorting occurs is ascending order, but sorting in descending order is supported as well.
    ///   </summary>
    ///   <param name="propertyPaths" type="String|Array of String" optional="true">A comma-separated (',') string of property paths or an array of property paths. Each property path can optionally end with ' desc' to force a descending sort order.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'orderByDesc': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that orders the results of the query by property name in descending order.
    ///   </summary>
    ///   <param name="propertyPaths" type="String|Array of String" optional="true">A comma-separated (',') string of property paths or an array of property paths.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'select': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that selects a list of properties from the results of the original query and returns the values of just these properties. This
    ///   will be referred to as a projection. 
    ///   If the result of this selection 'projection' contains entities, these entities will automatically be added to EntityManager's cache and will 
    ///   be made 'observable'.
    ///   Any simple properties, i.e. strings, numbers or dates within a projection will not be cached are will NOT be made 'observable'.
    ///   </summary>
    ///   <param name="propertyPaths" type="String|Array of String" optional="true">A comma-separated (',') string of property paths or an array of property paths.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'skip': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that skips the specified number of entities when returning results.
    ///   </summary>
    ///   <param name="count" type="Number" optional="true">The number of entities to return. If omitted this clears the</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'top': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that returns only the specified number of entities when returning results. - Same as 'take'.
    ///   </summary>
    ///   <param name="count" type="Number" optional="true">The number of entities to return.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'take': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that returns only the specified number of entities when returning results - Same as 'top'
    ///   </summary>
    ///   <param name="count" type="Number" optional="true">The number of entities to return.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'expand': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that will return related entities nested within its results. The expand method allows you to identify related entities, via navigation property
    ///   names such that a graph of entities may be retrieved with a single request. Any filtering occurs before the results are 'expanded'.
    ///   </summary>
    ///   <param name="propertyPaths" type="String|Array of String" optional="true">A comma-separated list of navigation property names or an array of navigation property names. Each Navigation Property name can be followed by a '.' and another navigation property name to enable identifying a multi-level relationship</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'withParameters': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a new query that includes a collection of parameters to pass to the server.
    ///   </summary>
    ///   <param name="parameters" type="Object" optional="true">A parameters object where the keys are the parameter names and the values are the parameter values.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'inlineCount': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a query with the 'inlineCount' capability either enabled or disabled.  With 'inlineCount' enabled, an additional 'inlineCount' property
    ///   will be returned with the query results that will contain the number of entities that would have been returned by this
    ///   query with only the 'where'/'filter' clauses applied, i.e. without any 'skip'/'take' operators applied. For local queries this clause is ignored.
    ///   </summary>
    ///   <param name="enabled" type="Boolean=true" optional="true">Whether or not inlineCount capability should be enabled. If this parameter is omitted, true is assumed.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'using': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a copy of this EntityQuery with the specified  'EntityManager',  'MergeStrategy' 
    ///   or  'FetchStrategy' applied.
    ///   </summary>
    ///   <param name="obj" type="EntityManager|MergeStrategy|FetchStrategy" optional="true">The object to update in creating a new EntityQuery from an existing one.</param>
    ///   <returns type="breeze.breeze.EntityQuery" ></returns>
    /// </signature>
  },
  'execute': function() {
    /// <signature>
    ///   <summary>
    ///   Executes this query.  This method requires that an EntityManager have been previously specified via the 'using' method.
    ///   </summary>
    ///   <param name="callback" type="Function" optional="true">Function called on success.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Function called on failure.          failureFunction([error])</param>
    ///   <returns type="breeze.breeze.Promise" ></returns>
    /// </signature>
  },
  'executeLocally': function() {
    /// <signature>
    ///   <summary>
    ///   Executes this query against the local cache.  This method requires that an EntityManager have been previously specified via the 'using' method.
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="resourceName" type="String" >The resource name used by this query.</field>
  'resourceName': null,
  
  /// <field name="wherePredicate" type="breeze.breeze.Predicate" >The 'where' predicate used by this query.</field>
  'wherePredicate': null,
  
  /// <field name="orderByClause" type="OrderByClause" >The  'OrderByClause' used by this query.</field>
  'orderByClause': null,
  
  /// <field name="skipCount" type="Integer" >The number of entities to 'skip' for this query.</field>
  'skipCount': null,
  
  /// <field name="takeCount" type="Integer" >The number of entities to 'take' for this query.</field>
  'takeCount': null,
  
  /// <field name="parameters" type="Object" >Any additional parameters that were added to the query via the 'withParameters' method. </field>
  'parameters': null,
  
  /// <field name="queryOptions" type="breeze.breeze.QueryOptions" >The  'QueryOptions' for this query.</field>
  'queryOptions': null,
  
  /// <field name="entityManager" type="breeze.breeze.EntityManager" >The  'EntityManager' for this query. This may be null and can be set via the 'using' method.</field>
  'entityManager': null,
  
});
intellisense.annotate(breeze.breeze.EntityQuery, {
  
  'from': function() {
    /// <signature>
    ///   <summary>
    ///   This is a static version of the 'from' method and it creates a 'base' entityQuery for the specified resource name.
    ///   </summary>
    ///   <param name="resourceName" type="String" optional="true">The resource to query.</param>
    ///   <returns type="breeze.breeze.EntityQuery ></returns>
    /// </signature>
  },
  'fromEntities': function() {
    /// <signature>
    ///   <summary>
    ///   Static method tht creates an EntityQuery that will allow 'requerying' an entity or a collection of entities by primary key. This can be useful
    ///   to force a requery of selected entities, or to restrict an existing collection of entities according to some filter.
    ///   </summary>
    ///   <param name="entities" type="Entity|Array of Entity" optional="true">The entities for which we want to create an EntityQuery.</param>
    ///   <returns type="breeze.breeze.EntityQuery ></returns>
    /// </signature>
  },
  'fromEntityKey': function() {
    /// <signature>
    ///   <summary>
    ///   Creates an EntityQuery for the specified  'EntityKey'.
    ///   </summary>
    ///   <param name="entityKey" type="breeze.breeze.EntityKey" optional="true">The  'EntityKey' for which a query will be created.</param>
    ///   <returns type="breeze.breeze.EntityQuery ></returns>
    /// </signature>
  },
  'fromEntityNavigation': function() {
    /// <signature>
    ///   <summary>
    ///   Creates an EntityQuery for the specified entity and  'NavigationProperty'.
    ///   </summary>
    ///   <param name="entity" type="Entity" optional="true">The Entity whose navigation property will be queried.</param>
    ///   <param name="navigationProperty" type="breeze.breeze.NavigationProperty" optional="true">The  'NavigationProperty' to be queried.</param>
    ///   <returns type="breeze.breeze.EntityQuery ></returns>
    /// </signature>
  },
  
});

intellisense.annotate(breeze.breeze.FilterQueryOp.prototype, {
  
  
});
intellisense.annotate(breeze.breeze.FilterQueryOp, {
  
  
  /// <field name="Equals" type="breeze.breeze.FilterQueryOp" >Aliases: 'eq', '=='</field>
  'Equals': null,
  
  /// <field name="NotEquals" type="breeze.breeze.FilterQueryOp" >Aliases: 'ne', '!='</field>
  'NotEquals': null,
  
  /// <field name="GreaterThan" type="breeze.breeze.FilterQueryOp" >Aliases: 'gt', '>'</field>
  'GreaterThan': null,
  
  /// <field name="LessThan" type="breeze.breeze.FilterQueryOp" >Aliases: 'lt', '<'</field>
  'LessThan': null,
  
  /// <field name="GreaterThanOrEqual" type="breeze.breeze.FilterQueryOp" >Aliases: 'ge', '>='</field>
  'GreaterThanOrEqual': null,
  
  /// <field name="LessThanOrEqual" type="breeze.breeze.FilterQueryOp" >Aliases: 'le', '<='</field>
  'LessThanOrEqual': null,
  
  /// <field name="Contains" type="breeze.breeze.FilterQueryOp" >String operation: Is a string a substring of another string. Aliases: 'substringof'</field>
  'Contains': null,
  
  /// <field name="StartsWith" type="breeze.breeze.FilterQueryOp" ></field>
  'StartsWith': null,
  
  /// <field name="EndsWith" type="breeze.breeze.FilterQueryOp" ></field>
  'EndsWith': null,
  
});

intellisense.annotate(breeze.breeze.Predicate.prototype, {
  
  'and': function() {
    /// <signature>
    ///   <summary>
    ///   'And's this Predicate with one or more other Predicates and returns a new 'composite' Predicate
    ///   </summary>
    ///   <param name="predicates" type="Multiple Predicates|Array of Predicate" optional="true"></param>
    
    /// </signature>
  },
  'or': function() {
    /// <signature>
    ///   <summary>
    ///   'Or's this Predicate with one or more other Predicates and returns a new 'composite' Predicate
    ///   </summary>
    ///   <param name="predicates" type="Multiple Predicates|Array of Predicate" optional="true"></param>
    
    /// </signature>
  },
  'not': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the 'negated' version of this Predicate
    ///   </summary>
    
    /// </signature>
  },
  'toFunction': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the function that will be used to execute this Predicate against the local cache.
    ///   </summary>
    ///   <returns type="Function" ></returns>
    /// </signature>
  },
  'toString': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a human readable string for this Predicate.
    ///   </summary>
    ///   <returns type="String" ></returns>
    /// </signature>
  },
  'validate': function() {
    /// <signature>
    ///   <summary>
    ///   Determines whether this Predicate is 'valid' for the specified EntityType; This method will throw an exception
    ///   if invalid.
    ///   </summary>
    ///   <param name="entityType" type="breeze.breeze.EntityType" optional="true">The entityType to validate against.</param>
    
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.Predicate, {
  
  'isPredicate': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether an object is a Predicate
    ///   </summary>
    ///   <param name="o" type="Object" optional="true"></param>
    
    /// </signature>
  },
  'create': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a new 'simple' Predicate.  Note that this method can also take its parameters as an array.
    ///   </summary>
    ///   <param name="property" type="String" optional="true">A property name, a nested property name or an expression involving a property name.</param>
    ///   <param name="operator" type="FilterQueryOp|String" optional="true"></param>
    ///   <param name="value" type="Object" optional="true">- This will be treated as either a property expression or a literal depending on context.  In general,           if the value can be interpreted as a property expression it will be, otherwise it will be treated as a literal.           In most cases this works well, but you can also force the interpretation by setting the next parameter 'valueIsLiteral' to true.</param>
    ///   <param name="valueIsLiteral" type="Boolean" optional="true">- Used to force the 'value' parameter to be treated as a literal - otherwise this will be inferred based on the context.</param>
    
    /// </signature>
  },
  'and': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a 'composite' Predicate by 'and'ing a set of specified Predicates together.
    ///   </summary>
    ///   <param name="predicates" type="Multiple Predicates|Array of Predicate" optional="true"></param>
    
    /// </signature>
  },
  'or': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a 'composite' Predicate by 'or'ing a set of specified Predicates together.
    ///   </summary>
    ///   <param name="predicates" type="Multiple Predicates|Array of Predicate" optional="true"></param>
    
    /// </signature>
  },
  'not': function() {
    /// <signature>
    ///   <summary>
    ///   Creates a 'composite' Predicate by 'negating' a specified predicate.
    ///   </summary>
    ///   <param name="predicate" type="breeze.breeze.Predicate" optional="true"></param>
    
    /// </signature>
  },
  
});

intellisense.annotate(breeze.breeze.Promise.prototype, {
  
  'then': function() {
    /// <signature>
    ///   <summary>
    ///   Used to handle the sucessfull return of data from a promise
    ///   </summary>
    ///   <param name="callback" type="Function" optional="true"></param>
    
    /// </signature>
  },
  'fail': function() {
    /// <signature>
    ///   <summary>
    ///   Used to handle any errors encountered wheh processing the promise.
    ///   </summary>
    ///   <param name="errorCallback" type="Function" optional="true"></param>
    
    /// </signature>
  },
  'fin': function() {
    /// <signature>
    ///   <summary>
    ///   A callback that is called regardless of the success or failure of the promise.
    ///   </summary>
    ///   <param name="finallyCallback" type="Function" optional="true"></param>
    
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.Promise, {
  
  
});

intellisense.annotate(breeze.breeze.Validator.prototype, {
  
  'validate': function() {
    /// <signature>
    ///   <summary>
    ///   Run this validator against the specified value.  This method will usually be called internally either
    ///   automatically by an property change, entity attach, query or save operation, or manually as a result of
    ///   a validateEntity call on the EntityAspect. The resulting ValidationResults are available via the 
    ///   EntityAspect.getValidationErrors method.
    ///   </summary>
    ///   <param name="value" type="Object" optional="true">Value to validate</param>
    ///   <param name="additionalContext" type="Object" optional="true">Any additional contextual information that the Validator can make use of.</param>
    ///   <returns type="ValidationError|null" >A ValidationError if validation fails, null otherwise</returns>
    /// </signature>
  },
  'getMessage': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the message generated by the most recent execution of this Validator.
    ///   </summary>
    ///   <returns type="String" ></returns>
    /// </signature>
  },
  
});
intellisense.annotate(breeze.breeze.Validator, {
  
  'required': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard 'required value' Validator
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'maxLength': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard maximum string length Validator; the maximum length must be specified
    ///   </summary>
    ///   <param name="context" type="Object" optional="true"></param>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'stringLength': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard maximum string length Validator; both minimum and maximum lengths must be specified.
    ///   </summary>
    ///   <param name="context" type="Object" optional="true"></param>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'string': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard string dataType Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'guid': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard string data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'number': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard numeric data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'int64': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard large integer data type - 64 bit - Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'int32': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard 32 bit integer data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'int16': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard 16 bit integer data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'byte': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard byte data type Validator. (This is a integer between 0 and 255 inclusive for js purposes).
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'bool': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard boolean data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  'date': function() {
    /// <signature>
    ///   <summary>
    ///   Returns a standard date data type Validator.
    ///   </summary>
    ///   <returns type="breeze.breeze.Validator >A new Validator</returns>
    /// </signature>
  },
  
  /// <field name="messageTemplates" type="Object" >Map of standard error message templates keyed by validator name. You can add to or modify this object to customize the template used for any validation error message.</field>
  'messageTemplates': null,
  
});

intellisense.annotate(breeze.breeze.ValidationError.prototype, {
  
  
  /// <field name="validator" type="breeze.breeze.Validator" >The Validator associated with this ValidationError.</field>
  'validator': null,
  
  /// <field name="context" type="Object" >A 'context' object associated with this ValidationError.</field>
  'context': null,
  
  /// <field name="property" type="DataProperty|NavigationProperty" >The DataProperty or NavigationProperty associated with this ValidationError.</field>
  'property': null,
  
  /// <field name="propertyName" type="String" >The property name associated with this ValidationError. This will be a 'property path' for any properties of a complex object.</field>
  'propertyName': null,
  
  /// <field name="errorMessage" type="String" >The error message associated with the ValidationError.</field>
  'errorMessage': null,
  
});
intellisense.annotate(breeze.breeze.ValidationError, {
  
  
});


intellisense.annotate(breeze.core, {

  'Enum': function() {
    /// <signature>
    ///   <summary>
    ///   Base class for all Breeze enumerations, such as EntityState, DataType, FetchStrategy, MergeStrategy etc.
    ///   A Breeze Enum is a namespaced set of constant values.  Each Enum consists of a group of related constants, called 'symbols'.
    ///   Unlike enums in some other environments, each 'symbol' can have both methods and properties.
    ///   See the example below:
    ///   </summary>
    ///   <param name="name" type="String" optional="true"></param>
    ///   <param name="methodObj" type="Object" optional="true"></param>
    /// </signature>
  },

  'EnumSymbol': function() {
    /// <signature>
    ///   <summary>
    ///   One of the constant values that is generated by the  'Enum' 'addSymbol' method.  EnumSymbols should ONLY be created via
    ///   the Enum.addSymbol method.
    ///   </summary>
    /// </signature>
  },

  'Event': function() {
    /// <signature>
    ///   <summary>
    ///   Class to support basic event publication and subscription semantics.
    ///   </summary>
    ///   <param name="name" type="String" optional="true"></param>
    ///   <param name="publisher" type="Object" optional="true">The object that will be doing the publication. i.e. the object to which this event is attached.</param>
    ///   <param name="defaultErrorCallback" type="Function" optional="true">If omitted then subscriber notification failures will be ignored.</param>
    /// </signature>
  },

});

intellisense.annotate(breeze.core.Enum.prototype, {
  
  'fromName': function() {
    /// <signature>
    ///   <summary>
    ///   Returns an Enum symbol given its name.
    ///   </summary>
    ///   <param name="name" type="String" optional="true">Name for which an enum symbol should be returned.</param>
    ///   <returns type="breeze.core.EnumSymbol" >The symbol that matches the name or 'undefined' if not found.</returns>
    /// </signature>
  },
  'addSymbol': function() {
    /// <signature>
    ///   <summary>
    ///   Adds a new symbol to an Enum.
    ///   </summary>
    ///   <param name="propertiesObj" type="Object" optional="true">A collection of properties that should be added to the new symbol. In other words, the 'propertiesObj' is any state that should be held by the symbol.</param>
    ///   <returns type="breeze.core.EnumSymbol" >The new symbol</returns>
    /// </signature>
  },
  'seal': function() {
    /// <signature>
    ///   <summary>
    ///   Seals this enum so that no more symbols may be added to it. This should only be called after all symbols
    ///   have already been added to the Enum.
    ///   </summary>
    
    /// </signature>
  },
  'getSymbols': function() {
    /// <signature>
    ///   <summary>
    ///   Returns all of the symbols contained within this Enum.
    ///   </summary>
    ///   <returns type="Array" elementType="breeze.core.EnumSymbol" >All of the symbols contained within this Enum.</returns>
    /// </signature>
  },
  'getNames': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the names of all of the symbols contained within this Enum.
    ///   </summary>
    ///   <returns type="Array" elementType="String" >All of the names of the symbols contained within this Enum.</returns>
    /// </signature>
  },
  'contains': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether an Enum contains a specified symbol.
    ///   </summary>
    ///   <param name="Object" type="Object" optional="true">or symbol to test.</param>
    ///   <returns type="Boolean" >Whether this Enum contains the specified symbol.</returns>
    /// </signature>
  },
  
});
intellisense.annotate(breeze.core.Enum, {
  
  'isSymbol': function() {
    /// <signature>
    ///   <summary>
    ///   Checks if an object is an Enum 'symbol'.
    ///   </summary>
    ///   <returns type="Boolean ></returns>
    /// </signature>
  },
  
});

intellisense.annotate(breeze.core.EnumSymbol.prototype, {
  
  'getName': function() {
    /// <signature>
    ///   <summary>
    ///   Returns the name of this symbol.
    ///   </summary>
    
    /// </signature>
  },
  'toString': function() {
    /// <signature>
    ///   <summary>
    ///   Same as the getName method. Returns the name of this symbol.
    ///   </summary>
    
    /// </signature>
  },
  
  /// <field name="parentEnum" type="breeze.core.Enum" >The  'Enum' to which this symbol belongs. __readOnly__</field>
  'parentEnum': null,
  
});
intellisense.annotate(breeze.core.EnumSymbol, {
  
  
});

intellisense.annotate(breeze.core.Event.prototype, {
  
  'publish': function() {
    /// <signature>
    ///   <summary>
    ///   Publish data for this event.
    ///   </summary>
    ///   <param name="data" type="Object" optional="true">Data to publish</param>
    ///   <param name="publishAsync" type="" optional="true">Whether to publish asynchonously or not.</param>
    ///   <param name="errorCallback" type="Function" optional="true">Will be called for any errors that occur during publication. If omitted,  errors will be eaten.</param>
    ///   <returns type="Boolean" >false if event is disabled; true otherwise.</returns>
    /// </signature>
  },
  'publishAsync': function() {
    /// <signature>
    ///   <summary>
    ///   Publish data for this event asynchronously.
    ///   </summary>
    ///   <param name="data" type="Object" optional="true">Data to publish</param>
    ///   <param name="errorCallback" type="Function" optional="true">Will be called for any errors that occur during publication. If omitted,  errors will be eaten.</param>
    
    /// </signature>
  },
  'subscribe': function() {
    /// <signature>
    ///   <summary>
    ///   Subscribe to this event.
    ///   </summary>
    ///   <param name="callback" type="Function" optional="true">Will be called whenever 'data' is published for this event. </param>
    ///   <returns type="Number" >This is a key for 'unsubscription'.  It can be passed to the 'unsubscribe' method.</returns>
    /// </signature>
  },
  'unsubscribe': function() {
    /// <signature>
    ///   <summary>
    ///   Unsubscribe from this event.
    ///   </summary>
    ///   <param name="unsubKey" type="Number" optional="true">The value returned from the 'subscribe' method may be used to unsubscribe here.</param>
    ///   <returns type="Boolean" >Whether unsubscription occured. This will return false if already unsubscribed or if the key simply cannot be found.</returns>
    /// </signature>
  },
  
});
intellisense.annotate(breeze.core.Event, {
  
  'enable': function() {
    /// <signature>
    ///   <summary>
    ///   Enables or disables the named event for an object and all of its children.
    ///   </summary>
    ///   <param name="eventName" type="String" optional="true">The name of the event.</param>
    ///   <param name="target" type="Object" optional="true">The object at which enabling or disabling will occur.  All event notifications that occur to this object or  children of this object will be enabled or disabled.</param>
    ///   <param name="isEnabled" type="Boolean|null|Function" optional="true">A boolean, a null or a function that returns either a boolean or a null.</param>
    
    /// </signature>
  },
  'isEnabled': function() {
    /// <signature>
    ///   <summary>
    ///   Returns whether for a specific event and a specific object and its children, notification is enabled or disabled or not set.
    ///   </summary>
    ///   <param name="eventName" type="String" optional="true">The name of the event.</param>
    ///   <param name="target" type="Object" optional="true">The object for which we want to know if notifications are enabled.</param>
    ///   <returns type="Boolean|null >A null is returned if this value has not been set.</returns>
    /// </signature>
  },
  
});




