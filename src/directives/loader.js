import './loader.scss';
export default {
    // called once when the directive is first bind to the element
    beforeMount(el){
        if(el.classList){
            el.classList.add('loader')
        }
    },
    // called on each nod update
    updated(el,binding){
        if(binding.value){
            el.classList.add('loading');
        }
        else{
            el.classList.remove('loading');
        }
    }
};