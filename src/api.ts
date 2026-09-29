const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export type Food = { id: string; name: string; category?: string; servingSize: number; unit: string; price: number; availableQuantity: number; dietaryTags?: string[]; nutrition?: Record<string, number>; nutritionSource?: string }
export type Menu = { id: string; peopleCount: number; days: Array<{ day: string; morning: { foodId: string; foodName: string }; afternoon: { foodId: string; foodName: string }; evening: { foodId: string; foodName: string } }> }

export const mockFoods: Food[] = [
 { id:'food_001', name:'Rice', category:'Grain', servingSize:100, unit:'g', price:5, availableQuantity:500, dietaryTags:['vegetarian'], nutrition:{ calories:130, protein:2.7, iron:0.2, calcium:10 }, nutritionSource:'ai_estimate' },
 { id:'food_002', name:'Idli', category:'Breakfast', servingSize:3, unit:'pcs', price:12, availableQuantity:1200, dietaryTags:['vegetarian'], nutrition:{ calories:174, protein:5, iron:1.2, calcium:25 }, nutritionSource:'ai_estimate' },
 { id:'food_003', name:'Dal Tadka', category:'Pulse', servingSize:150, unit:'g', price:18, availableQuantity:80, dietaryTags:['vegetarian'], nutrition:{ calories:210, protein:12, iron:3, calcium:50 }, nutritionSource:'ai_estimate' },
 { id:'food_004', name:'Chana Curry', category:'Curry', servingSize:100, unit:'g', price:11, availableQuantity:500, dietaryTags:['vegetarian'], nutrition:{ calories:164, protein:8.9, iron:2.9, calcium:49 }, nutritionSource:'ai_estimate' },
 { id:'food_005', name:'Vegetable Curry', category:'Curry', servingSize:120, unit:'g', price:14, availableQuantity:65, dietaryTags:['vegetarian'], nutrition:{ calories:118, protein:4, iron:1.4, calcium:45 }, nutritionSource:'ai_estimate' },
]

export const mockMenu: Menu = { id:'menu_001', peopleCount:500, days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => ({ day, morning:{foodId:'food_002',foodName:'Idli'}, afternoon:{foodId:'food_001',foodName:'Rice'}, evening:{foodId:'food_004',foodName:'Chana Curry'} })) }

export async function api<T>(path: string, options?: RequestInit, fallback?: T): Promise<{ data: T; live: boolean }> { try { const response = await fetch(`${BASE}${path}`, { headers:{'Content-Type':'application/json'}, ...options }); if (!response.ok) throw new Error('Backend unavailable'); const envelope = await response.json(); if (!envelope.success) throw new Error(envelope.error?.message || 'Request failed'); return { data: envelope.data, live:true } } catch { if (fallback === undefined) throw new Error('Backend unavailable'); return { data:fallback, live:false } } }
