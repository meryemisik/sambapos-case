<script setup>
const localePath = useLocalePath()
    const router = useRouter();
    router.push(localePath('/auth/login'));
</script>
