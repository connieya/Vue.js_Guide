import bus from '../utils/bus'

export default{
    created(){
            bus.$emit('start:spinner');
            // 순서 1번 데이터를 받아오기 위해 store 호출
             this.$store.dispatch('FETCH_LIST' , this.$route.name)
            .then( ()=> {
                // 순서 5번
                console.log(5);
                 bus.$emit('end:spinner');
            })
            .catch( ()=>{console.log(6)});
            


         }
}


