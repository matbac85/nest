import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs';

const supabase = createClient('https://keqametpuctibucnebxe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcWFtZXRwdWN0aWJ1Y25lYnhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDIzMjEsImV4cCI6MjAwOTMxODMyMX0.sCFhQefQpeF8qEMC1nE48qnPMf1X-a_umrfuV3lAdvQ')


let rawdata = fs.readFileSync('db.json');
let data = JSON.parse(rawdata);

data.cabins.forEach(async(cabin) =>{
    const { error } = await supabase
    .from('cabins')
    .insert({ 
      id: cabin.id, 
      name: cabin.name,
      commune: cabin.commune,
      region: cabin.region,
      price_per_night: cabin.price_per_night,
      description: cabin.description,
      rating: cabin.rating,
      max_guest: cabin.max_guest
     })
    console.log(error)
})

