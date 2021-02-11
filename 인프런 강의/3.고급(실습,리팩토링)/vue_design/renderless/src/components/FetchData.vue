
<script>
// template 가 있으니깐 이때까지 ... $scopedSlots 이 작돟하지 않았다. 
import axios from 'axios';
export default {
    props : ['url'],
    data(){
        return {
            response : null,
            loading : true
        }
    },
    created(){
        axios.get(this.url)
        .then(response => {
            console.log(this.url);
            console.log(response);
            this.response = response.data;
            this.loading = false;
            console.log(this.response);
        })
        .catch(error =>{
            alert('[ERROR] fetching the data', error);
            console.log(error);
        });

    },
    render() {
        console.log("render");
        // $scopeSlots은 하위 컴포넌트에 있는 데이터를 상위 컴포넌트에서 접근 할 수 있게 해줌 
        return this.$scopedSlots.default({
        
            response : this.response,
            loading : this.loading,
        });
    },

}
</script>
