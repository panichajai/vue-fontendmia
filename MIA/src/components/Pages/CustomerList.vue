<template lang="">
    <v-table>
        <thead>
            <tr className="">
                <th className="px-4 py-2 text-center">ลำดับ</th>
                <th className="px-4 py-2 text-center">ชื่อ-สกุล</th>
                <th className="px-4 py-2 text-center">เบอร์โทรศัพท์</th>
                <th className="px-4 py-2 text-center">บัตรประชาชน</th>
                <th className="px-4 py-2 text-center">เครื่องมือ</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer, index) in filteredItems" :key="customer._id">
                <td class="px-4 py-2 text-center">{{ index + 1 }}</td>
                <td class="px-4 py-2 text-center">{{ customer.customer_fname }} {{ customer.customer_lname }}</td>
                <td class="px-4 py-2 text-center">{{ customer.customer_phone }}</td>
                <td class="px-4 py-2 text-center">{{ customer.customer_idCard }}</td>
            </tr>
        </tbody>
  </v-table>
</template>

<script>
export default {
 
  data() {
    return {
      urlApi: 'https://api-mia-five.vercel.app/',
      filteredItems: [],
      loading: true,
    };
  },
  mounted() {
    fetch(this.urlApi+'api/customers')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      this.filteredItems = data.data;
      this.loading = false;
    })
    .catch((error) => {
      console.error('Error fetching:', error);
      this.loading = false;
    });
  },
};
</script>

<style scoped>
    
</style>