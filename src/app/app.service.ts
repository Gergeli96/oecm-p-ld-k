import DataSource from 'devextreme/data/data_source';
import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';

@Injectable()
export class Service {
    getDataSource() {
        return new DataSource({
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
                key: 'Id',
                beforeSend(request) {
                    request.params.startDate = '2020-05-10';
                    request.params.endDate = '2020-05-15';
                },
            },
        });
    }

    getProducts(): Product[] {
        return products;
    }

    getCompanies() : Company[] {
        return companies;
    }
}

export class Product {
    id: string = ''
    text: string = ''
    expanded?: boolean
    items?: Product[]
    price?: number
    image?: string
}

const products: Product[] = [{
    id: '1',
    text: 'Stores',
    expanded: true,
    items: [{
        id: '1_1',
        text: 'Super Mart of the West',
        expanded: true,
        items: [{
            id: '1_1_1',
            text: 'Video Players',
            items: [{
                id: '1_1_1_1',
                text: 'HD Video Player',
                price: 220,
                image: 'images/products/1.png',
            }, {
                id: '1_1_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                price: 270,
            }],
        }, {
            id: '1_1_2',
            text: 'Televisions',
            expanded: true,
            items: [{
                id: '1_1_2_1',
                text: 'SuperLCD 42',
                image: 'images/products/7.png',
                price: 1200,
            }, {
                id: '1_1_2_2',
                text: 'SuperLED 42',
                image: 'images/products/5.png',
                price: 1450,
            }, {
                id: '1_1_2_3',
                text: 'SuperLED 50',
                image: 'images/products/4.png',
                price: 1600,
            }, {
                id: '1_1_2_4',
                text: 'SuperLCD 55',
                image: 'images/products/6.png',
                price: 1350,
            }, {
                id: '1_1_2_5',
                text: 'SuperLCD 70',
                image: 'images/products/9.png',
                price: 4000,
            }],
        }, {
            id: '1_1_3',
            text: 'Monitors',
            expanded: true,
            items: [{
                id: '1_1_3_1',
                text: '19"',
                expanded: true,
                items: [{
                    id: '1_1_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    price: 160,
                }],
            }, {
                id: '1_1_3_2',
                text: '21"',
                items: [{
                    id: '1_1_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    price: 170,
                }, {
                    id: '1_1_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    price: 175,
                }],
            }],
        }, {
            id: '1_1_4',
            text: 'Projectors',
            items: [{
                id: '1_1_4_1',
                text: 'Projector Plus',
                image: 'images/products/14.png',
                price: 550,
            }, {
                id: '1_1_4_2',
                text: 'Projector PlusHD',
                image: 'images/products/15.png',
                price: 750,
            }],
        }],

    }, {
        id: '1_2',
        text: 'Braeburn',
        items: [{
            id: '1_2_1',
            text: 'Video Players',
            items: [{
                id: '1_2_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                price: 240,
            }, {
                id: '1_2_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                price: 300,
            }],
        }, {
            id: '1_2_2',
            text: 'Televisions',
            items: [{
                id: '1_2_2_1',
                text: 'SuperPlasma 50',
                image: 'images/products/3.png',
                price: 1800,
            }, {
                id: '1_2_2_2',
                text: 'SuperPlasma 65',
                image: 'images/products/8.png',
                price: 3500,
            }],
        }, {
            id: '1_2_3',
            text: 'Monitors',
            items: [{
                id: '1_2_3_1',
                text: '19"',
                items: [{
                    id: '1_2_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    price: 170,
                }],
            }, {
                id: '1_2_3_2',
                text: '21"',
                items: [{
                    id: '1_2_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    price: 180,
                }, {
                    id: '1_2_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    price: 190,
                }],
            }],
        }],

    }, {
        id: '1_3',
        text: 'E-Mart',
        items: [{
            id: '1_3_1',
            text: 'Video Players',
            items: [{
                id: '1_3_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                price: 220,
            }, {
                id: '1_3_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                price: 275,
            }],
        }, {
            id: '1_3_3',
            text: 'Monitors',
            items: [{
                id: '1_3_3_1',
                text: '19"',
                items: [{
                    id: '1_3_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    price: 165,
                }],
            }, {
                id: '1_3_3_2',
                text: '21"',
                items: [{
                    id: '1_3_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    price: 175,
                }],
            }],
        }],
    }, {
        id: '1_4',
        text: 'Walters',
        items: [{
            id: '1_4_1',
            text: 'Video Players',
            items: [{
                id: '1_4_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                price: 210,
            }, {
                id: '1_4_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                price: 250,
            }],
        }, {
            id: '1_4_2',
            text: 'Televisions',
            items: [{
                id: '1_4_2_1',
                text: 'SuperLCD 42',
                image: 'images/products/7.png',
                price: 1100,
            }, {
                id: '1_4_2_2',
                text: 'SuperLED 42',
                image: 'images/products/5.png',
                price: 1400,
            }, {
                id: '1_4_2_3',
                text: 'SuperLED 50',
                image: 'images/products/4.png',
                price: 1500,
            }, {
                id: '1_4_2_4',
                text: 'SuperLCD 55',
                image: 'images/products/6.png',
                price: 1300,
            }, {
                id: '1_4_2_5',
                text: 'SuperLCD 70',
                image: 'images/products/9.png',
                price: 4000,
            }, {
                id: '1_4_2_6',
                text: 'SuperPlasma 50',
                image: 'images/products/3.png',
                price: 1700,
            }],
        }, {
            id: '1_4_3',
            text: 'Monitors',
            items: [{
                id: '1_4_3_1',
                text: '19"',
                items: [{
                    id: '1_4_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    price: 160,
                }],
            }, {
                id: '1_4_3_2',
                text: '21"',
                items: [{
                    id: '1_4_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    price: 170,
                }, {
                    id: '1_4_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    price: 180,
                }],
            }],
        }, {
            id: '1_4_4',
            text: 'Projectors',
            items: [{
                id: '1_4_4_1',
                text: 'Projector Plus',
                image: 'images/products/14.png',
                price: 550,
            }, {
                id: '1_4_4_2',
                text: 'Projector PlusHD',
                image: 'images/products/15.png',
                price: 750,
            }],
        }],

    }],
}];

export class Company {
    ID: number;

    Name: string;

    Address: string;

    City: string;

    State: string;

    ZipCode: number;

    Phone: string;

    Fax: string;

    Website: string;

    Active: boolean;
}

const companies: Company[] = [{
    ID: 1,
    Name: 'Super Mart of the West',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    ZipCode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
    Website: '',
    Active: true,
}, {
    ID: 2,
    Name: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    ZipCode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: '',
    Active: true,
}, {
    ID: 3,
    Name: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    ZipCode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
    Website: '',
    Active: true,
}, {
    ID: 4,
    Name: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    ZipCode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
    Website: '',
    Active: true,
}];
