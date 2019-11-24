
//setting up all my variables, elements, arrays.  I initially wanted to pass an array of objects around and create this lists with those
//i spent way too long trying to make that work.
let task_button = document.querySelector('button');
let task_description = document.getElementById('task');
let counter = 0;
let task_completed = false;

//these were the arrays i was using, theyre still used to determine the number of entries in each list.
var task_array=[];
var completed_array = [];
let tasks = document.getElementById('tasks');
let completed = document.getElementById('completed');
//task object constructor with (i think) object prototyping
function Task(counter, task_text, task_completed)
{
    this.entry =
    {
        task_text:task_text,
        task_completed:task_completed
    }

    this.counter=counter;
    counter++;

  
    
    
    
    //this is a bad name and its too late to fix it.  i would like it to be broken
    this.add_to_tasks = function()
    
    {

            //create the button and checkbox elements, using the counter to create their id (hah)
            var add_check = document.createElement('input');
            add_check.type = 'checkbox'; 
                add_check.name = 'checkbox'; 
                 
                add_check.id = counter;
            var add_button = document.createElement('button');
            
            add_button.name = 'delete';
            add_button.id = 'button' + counter;
            add_button.innerHTML = 'DELETE';
           
               
                
            
            
          
            //creating new div and li, appending them to the child along with the current task text
            var div = document.createElement('DIV');
            var li = document.createElement('LI');
            var entry_task = document.createTextNode(this.entry.task_text);
            console.log(entry_task);
            tasks.appendChild(div);
            div.appendChild(li);
            li.appendChild(add_check);
            li.appendChild(entry_task);
            li.appendChild(add_button);
         //adding them to the initial array
            task_array.push(this.entry);
            
                //this for loop has no {} and it breaks when i put them in :
                for(i=0;i<task_array.length;i++)
                //removing this also breaks it, i have no idea why.  it has to be something wild going on with the loop
                console.log(task_array[i]);
                
                var checkbox = document.getElementById(i);
                var button = document.getElementById('button' + i);
                button.addEventListener('click', function()
                {
                    
                    div.removeChild(li);
                  
                    
                })
                //event listener for the current checkbox
                checkbox.addEventListener('click', function()
                {
                    
                    
                   
                    
                   checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
                    
                    
                    //here i moved the task fromn the first array to the second when it was checked
                    completed_array.push(task_array[i]);
                    
                    task_array.splice(i);
                    
                    completed.appendChild(li);
                    li.appendChild(entry_task);
                    li.removeChild(checkbox);
                    li.removeChild(button);
                    
                    
                    
        })
      
    }
   
}        
 //the function for the button created in html          
task_button.onclick= function()
{
    let task_description = document.getElementById('task');
    task_text = task_description.value;
    this.task = new Task(counter, task_description.value, false);
    this.task.add_to_tasks(); 
    counter++;
    //clear the text box
    task_description.value = '';
};
   
   
   
   
   
   
