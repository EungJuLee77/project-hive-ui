import axiosInstance from './axiosInstance'

export class UserService {
  async getUser(id: string) {
    try {
      const response = await axiosInstance.get('user?id=' + id)
      return response
    } catch (error) {
      console.log('Error occurred while fetching user:', error)
      throw error
    }
  }

  async putUser(profile: object) {
    try {
      const response = await axiosInstance.put('user', profile)
      return response
    } catch (error) {
      console.log('Error occurred while updating user:', error)
      throw error
    }
  }
}