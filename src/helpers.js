import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://keqametpuctibucnebxe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcWFtZXRwdWN0aWJ1Y25lYnhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NDIzMjEsImV4cCI6MjAwOTMxODMyMX0.sCFhQefQpeF8qEMC1nE48qnPMf1X-a_umrfuV3lAdvQ')


const image = function (cabinId, id){
    return `https://keqametpuctibucnebxe.supabase.co/storage/v1/object/public/images/cabins/${cabinId}/${cabinId}-${id}.webp`;
}
export {supabase, image}
