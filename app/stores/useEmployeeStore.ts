// stores/useEmployeeStore.ts
import type { Employee } from "~/types/employee";

export const useEmployeeStore = defineStore("employee", () => {
  // State
  const employees = ref<Employee[]>([]);
  const selectedEmployee = ref<Employee | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const totalEmployees = computed(() => employees.value.length);

  const byContractType = computed(() => ({
    odredjeno: employees.value.filter((e) => e.contractType === "odredjeno")
      .length,
    neodredjeno: employees.value.filter((e) => e.contractType === "neodredjeno")
      .length,
    zadruga: employees.value.filter((e) => e.contractType === "zadruga").length,
    pp: employees.value.filter((e) => e.contractType === "pp").length,
  }));

  const withTransport = computed(() => employees.value.filter((e) => e.prevoz));

  const withReadiness = computed(() =>
    employees.value.filter((e) => e.pripravnost),
  );

  // Actions
  async function fetchAll() {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: Employee[] }>(
        "/api/employees",
      );
      employees.value = res.data;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchOne(kadrovskiBroj: string) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: Employee }>(
        `/api/employees/${kadrovskiBroj}`,
      );
      selectedEmployee.value = res.data;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  async function create(employee: Employee) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: Employee }>(
        "/api/employees",
        { method: "POST", body: employee },
      );
      employees.value.push(res.data);
      return res.data;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  async function update(kadrovskiBroj: string, data: Partial<Employee>) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: Employee }>(
        `/api/employees/${kadrovskiBroj}`,
        { method: "PUT", body: data },
      );
      const index = employees.value.findIndex(
        (e) => e.kadrovskiBroj === kadrovskiBroj,
      );
      if (index !== -1) employees.value[index] = res.data;
      return res.data;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  async function remove(kadrovskiBroj: string) {
    isLoading.value = true;
    error.value = null;
    try {
      await $fetch(`/api/employees/${kadrovskiBroj}`, {
        method: "DELETE",
      });
      employees.value = employees.value.filter(
        (e) => e.kadrovskiBroj !== kadrovskiBroj,
      );
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    // State
    employees,
    selectedEmployee,
    isLoading,
    error,
    // Getters
    totalEmployees,
    byContractType,
    withTransport,
    withReadiness,
    // Actions
    fetchAll,
    fetchOne,
    create,
    update,
    remove,
  };
});
