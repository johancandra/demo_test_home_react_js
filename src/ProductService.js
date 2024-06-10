
export const ProductService = {
        getData() {
            return [
                {
                    id: 1,
                    product: 'Product A',
                    date: '2023-01-01',
                    sales: 150,
                    revenue: '3000'
                },
                {
                    id: 2,
                    product: 'Product B',
                    date: '2023-01-01',
                    sales: 100,
                    revenue: '2000'
                },
                {
                    id: 3,
                    product: 'Product C',
                    date: '2023-01-02',
                    sales: 200,
                    revenue: '1000'
                },
                {
                    id: 4,
                    product: 'Product D',
                    date: '2023-01-02',
                    sales: 150,
                    revenue: '3000'
                },
                {
                    id: 5,
                    product: 'Product E',
                    date: '2023-01-03',
                    sales: 100,
                    revenue: '2000'
                },
                {
                    id: 6,
                    product: 'Product F',
                    date: '2023-01-03',
                    sales: 200,
                    revenue: '1000'
                },
                {
                    id: 7,
                    product: 'Product G',
                    date: '2023-01-04',
                    sales: 150,
                    revenue: '3000'
                },
                {
                    id: 8,
                    product: 'Product H',
                    date: '2023-01-04',
                    sales: 100,
                    revenue: '2000'
                },
                {
                    id: 9,
                    product: 'Product I',
                    date: '2023-01-05',
                    sales: 200,
                    revenue: '1000'
                },
                {
                    id: 10,
                    product: 'Product J',
                    date: '2023-01-05',
                    sales: 150,
                    revenue: '3000'
                },
                {
                    id: 11,
                    product: 'Product K',
                    date: '2023-01-06',
                    sales: 100,
                    revenue: '2000'
                },
                {
                    id: 12,
                    product: 'Product L',
                    date: '2023-01-06',
                    sales: 200,
                    revenue: '1000'
                }
            ];
        },

        getProductsSmall() {
            return Promise.resolve(this.getData().slice(0, 10));
        },

        getProductsMedium() {
            return Promise.resolve(this.getData().slice(0, 50));
        },

        getProductsLarge() {
            return Promise.resolve(this.getData().slice(0, 200));
        },

        getProductsXLarge() {
            return Promise.resolve(this.getData());
        },
        getProductsName() {
            var arr = [];
            for (let a of this.getData()) { if(!arr.includes(a.product)) arr.push(a.product); }
            return arr;
        },
        getProductsSalesRev(product) {
            var b = 0;
            for (let a of this.getData()) { if(a.product==product) {
                b += a.sales * Number(a.revenue);
            }}
            return b;
        },
        getProductsDate() {
            var arr = [];
            for (let a of this.getData()) { if(!arr.includes(a.date)) arr.push(a.date); }
            return arr;
        },
        getProductsDateSales(date) {
            var b = 0;
            for (let a of this.getData()) { if(a.date==date) {
                b += a.sales;
            }}
            return b;
        }
    };
    