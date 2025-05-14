const updateMenu = async (menuId, menuData) => {
    try {
      const response = await axios.put(`${API_URL}/menu/${menuId}`, menuData);
      return response.data;
    } catch (error) {
      console.error("Error updating menu:", error);
      throw error;
    }
  }
  
  export default updateMenu;