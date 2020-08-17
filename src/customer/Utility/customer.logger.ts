export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {

    }
}


export class ConsoleLogger extends BaseLogger {
    Log() {
        console.log("using console logger");
        
    }
}

export class DBLogger  extends BaseLogger {
    Log() {
        console.log("using DB logger");
        
    }
}

export class FileLogger  extends BaseLogger {
    Log() {
        console.log("using File logger");
        
    }
}