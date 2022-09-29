'use strict';

const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        } this.size++;
    }

        append(value){
            const node = new Node(value);
            if (this.isEmpty()){
                this.head = node;
            } else {
                let prev = this.head;
                while(prev.next){
                    prev = prev.next;
                }
                prev.next = node;
            } this.size++;
        }
    
        insert(value, index){
            if (index < 0 || index > this.size){
                return null;
            } else if (index === 0){
                this.prepend(value);
            } else if (index === this.size){
                this.append(value);
            } else {
                const node = new Node(value);
                let prev = this.head;
                for (let i = 0; i < index -1; i++){
                    prev = prev.next;
                }
                node.next = prev.next;
                prev.next = node;
                this.size++;
            }
        }

        
        removeFrom(index){
            if(index < 0 || index > this.size){
                return null;
            } 
            let removedNode;
             if (index === 0){
                 removedNode = this.head;
                this.head = this.head.next;
            } else {
                let prev = this.head;
                for (let i = 0; i < index -1 ; i++){
                    prev = prev.next;
                }
                 removedNode = prev.next;
                prev.next = prev.next.next;
            } 
            this.size--;
            return removedNode.value;
        }
        deleteMiddle() {
            let middleNode = Math.floor(this.size/2);
            let removedNode = this.head;
            let prev;
        
            if (middleNode === 0) {
              this.head = node.next;
            } else {
              for (let i = 0; i < middleNode; i++) {
                prev = removedNode;
                removedNode =prev.next;
              }
              prev.next = removedNode.next;
            }
            this.size--;
          }
}
module.exports = LinkedList;