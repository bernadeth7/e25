function renderDiv(){
    class Stack{
        constructor(){
            this.items = []
            this.count = 0
        };
        push(element){
            this.items[this.count] = element 
            console.log(`${element} added to ${this.count}`)
            document.write(`<h6>${element} added to ${this.count}</h6>`)
            this.count += 1
            return this.count - 1
        };
        pop(){
            if(this.count == 0) return undefined
            let deleteItem = this.items[this.count -1]
            this.count -=1
            console.log(`${deleteItem} removed`)
            document.write(`<h6>${deleteItem} removed</h6>`)
            return deleteItem
        };
        peek(){
            console.log(`Top element is ${this.items[this.count - 1]}`)
            document.write(`<h6>Top element is ${this.items[this.count - 1]}</h6>`)
            return this.items[this.count-1]
        };
        isEmpty(){
            console.log(this.count == 0? 'Stack is empty' : 'Stack is NOT empty')
            document.write(this.count == 0? '<h6>Stack is empty</h6>' : '<h6>Stack is NOT empty</h6>')
            return this.count == 0
        };
        size(){
            console.log(`${this.count} elements in stack`)
            document.write(`<h6>${this.count} elements in stack</h6>`)
            return this.count
        };
        print(){
            let str = ''
            for (let i=0; i< this.count; i++){
                str += this.items[i] + ' '
            } 
            document.write(`<h6>${str} </h6>`)
            return str
            
        };
        clear(){
            this.item=[]
            this.count=0
            console.log('Stack cleared...')
            document.write('<h6>Stack cleared...</h6>')
            return this.items
        }
    }
    const stack = new Stack()
    stack.isEmpty()
    stack.push(100)
    stack.push(200)
    stack.peek()
    stack.push(300)
    console.log(stack.print())
    stack.pop()
    stack.pop()
    stack.clear()
    console.log(stack.print())
    stack.size()
    stack.isEmpty()    
}
