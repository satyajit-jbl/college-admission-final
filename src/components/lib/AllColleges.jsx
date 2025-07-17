"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const AllColleges = () => { 
    const { data: allCollege = [], isPending: isLoading, refetch } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await axios.get(`/api/allCollege`)
            return res.data
        }
    })
  
    return { allCollege, isLoading, refetch };
};

export default AllColleges;