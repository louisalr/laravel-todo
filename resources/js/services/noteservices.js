import {ref} from "vue";
import axios from "axios";

export default function useNotes(){
    const notes = ref([]);

    const getNotes = async() => {
        let response = await axios.get('/api/notes');
        notes.value = response.data.data;
    }

    return{
        notes,
        getNotes
    }
}