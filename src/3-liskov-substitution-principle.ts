/**
 * Liskov Substitution Principle
 * @description Subtypes must be substitutable for their base types
 * @example A Database Class that allows connection to multiple database types
 **/

// ============> Without the Liskov Substitution Principle
class MySQLDatabase {
	connect(uri: string, username: string, password: string, port: string) {
		// connect to MySQL
	}
}

class MongoDatabase {
	connect(uri: string, username: string, password: string, port: string) {
		// connect to MongoDB
	}
}

class PostgreDatabase {
	connect(uri: string, username: string, password: string, port: string) {
		// connect to Postgre
	}
}




// ============> Implementing the Liskov Substitution Principle
// We should have only one Database class and allow any type of connection from it

interface IDatabaseProperties {
	uri: string,
	username: string,
	password: string,
	port: string
};

// Every type of database should implement this Interface
// This will allow the Database class to expect any Class (type of database) implementing this
interface IDatabase {
	connect(...IDatabaseProperties): Promise<any>;
}

// For example: A MongoDB Connector
class Mongo implements IDatabase {
	private properties: IDatabaseProperties;
	constructor(properties: IDatabaseProperties) {
		this.properties = properties;
	}
	connect(): Promise<any> {
		return new Promise(() => {
			// connect to MongoDB
		});
	}
}

// or a MySQL Connector
class MySQL implements IDatabase {
	private properties: IDatabaseProperties;
	constructor(properties: IDatabaseProperties) {
		this.properties = properties;
	}
	connect(): Promise<any> {
		return new Promise(() => {
			// connect to MySQL
		});
	}
}

class Database {
	private database: IDatabase;
	constructor(database: IDatabase) {
		this.database = database;
	}

	public connect(): void {
		this.database.connect();
	}
}

// Now we can use the Database Class to access multiple databases
const mongoDBConnector = new Mongo({
	uri: 'mongo://',
	username: 'username',
	password: 'password',
	port: '27001'
});
const mongoDB = new Database(mongoDBConnector);

// or using the MySQL Connector with the same Database class
const mySQLConnector = new MySQL({
	uri: 'mysql://',
	username: 'username',
	password: 'password',
	port: '3306'
});
const mySQL = new Database(mySQLConnector);