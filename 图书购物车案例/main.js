const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:"java",
                date:'2020-1-1',
                price:121.00,
                count:1
            },{
                id:2,
                name:"javaScript",
                date:'2020-6-1',
                price:101.00,
                count:1
            },{
                id:3,
                name:"mysql",
                date:'2020-4-1',
                price:151.00,
                count:1
            },{
                id:4,
                name:"C++",
                date:'2020-2-1',
                price:131.00,
                count:1
            }
        ]
    },
    filters:{
        showPrice(price){
            return '¥'+price.toFixed(2);
        }
    },
    methods:{
        add(index){
            this.books[index].count++;
        },
        sub(index){
            this.books[index].count--;
        },
        removeHandle(index){
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            //1.普通的for循环
            /*let totalPrice = 0;
            for(let i = 0;i<this.books.length;i++){
                totalPrice += this.books[i].price*this.books[i].count;
            }
            return totalPrice;*/
            //2.(let i in this.books)
            /*let totalPrice = 0;
            for(let i in this.books){
                /!*totalPrice += this.books[i].price*this.books[i].count;*!/
                const book = this.books[i];
                totalPrice += book.price*book.count;
            }
            return totalPrice;*/
            //3.(let i of this.books)
            let totalPrice = 0;
            for(let item of this.books){
                totalPrice += item.price*item.count;
            }
            return totalPrice;
        }
    }
})
