import React, { useState, createContext } from 'react';
export const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <CategoryContext.Provider value={{ handleCategoryClick, selectedCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;