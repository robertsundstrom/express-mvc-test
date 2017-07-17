export class Http {
    public static get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new HttpError(
                        xhttp.status,
                        xhttp.statusText,
                    ));
                }
            }
            };
            xhttp.open("GET", url, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send();
        });
    }

    public static post<T>(url: string, data: any): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new HttpError(
                        xhttp.status,
                        xhttp.statusText,
                    ));
                }
                }
            };
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify(data));
        });
    }

    public static put<T>(url: string, data: any): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new HttpError(
                        xhttp.status,
                        xhttp.statusText,
                    ));
                }
                }
            };
            xhttp.open("PUT", url, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify(data));
        });
    }

    public static delete<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve();
                } else {
                    reject(new HttpError(
                        xhttp.status,
                        xhttp.statusText,
                    ));
                }
            }
            };
            xhttp.open("DELETE", url, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send();
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class HttpError implements Error {
    public name: string;
    public message: string;
    public status: number;
    public statusText: string;

    constructor(status: number, statusText: string) {
        this.name = "Http Error";
        this.message = `${status} - ${statusText}`;
        this.status = status;
        this.statusText = statusText;
    }
}
