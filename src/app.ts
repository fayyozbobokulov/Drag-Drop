function AutoBind(_:any, _2: string, descriptor: PropertyDescriptor){
    console.log(_, _2)
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    } 
    return adjDescriptor;
}

class ProjectInput {
    name = 'Max';
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descrtionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;


    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = document.getElementById('title')! as HTMLInputElement;
        this.descrtionInputElement = document.getElementById('description')! as HTMLInputElement;
        this.peopleInputElement = document.getElementById('people')! as HTMLInputElement;

        
        this.configure();
        this.attach();
        console.log(this.titleInputElement.value)
    }

    @AutoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        this.titleInputElement.value;
    }

    // @AutoBind
    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }

}

const prjInput = new ProjectInput()